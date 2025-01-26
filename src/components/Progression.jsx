import { useEffect, useState } from "react";

import ProgressionItem from "./ProgressionItem";
import Spinner from "./Spinner";
import Title from "./Title";

const Progression = () => {
  const [timelines, setTimelines] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_PROJECTS_URL =
    "https://portfolio-api-nq76.onrender.com/api/timelines";
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetchTimelines = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(API_PROJECTS_URL, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch timelines");
      }
      const data = await response.json();
      console.log(data);
      if (!data || data.length === 0) {
        setError("No timelines found.");
        setTimelines([]);
        return;
      }
      setTimelines(data);
    } catch (error) {
      console.error(`Error fetching timelines: ${error}`);
      setError("Error fetching timelines. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimelines();
  }, []);

  return (
    <div id="progression" className="text-gray-50">
      <Title>Progression</Title>
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : error ? (
            <p className="text-red-500 flex justify-center">{error}</p>
          ) : (
            timelines.map((step) => (
              <ProgressionItem
                key={step._id}
                year={step.year}
                timeline={step.timeline}
                duration={step.duration}
                details={step.details}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Progression;
