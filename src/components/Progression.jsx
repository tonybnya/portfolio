import { useEffect, useState } from "react";
import axios from "axios";

import Title from "./Title";
import ProgressionItem from "./ProgressionItem";

function Progression() {
  const [timelines, setTimelines] = useState([]);
  const [error, setError] = useState(null);

  const timelinesAPI = "https://portfolio-api-nq76.onrender.com/api/timelines";

  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const res = await axios.get(timelinesAPI);

        setTimelines(res.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchTimelines();
  }, []);

  return (
    <div className="dark:text-gray-50 text-black">
      <Title>Progression</Title>
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
          {error ? (
            <p>Error fetching timelines!</p>
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
}

export default Progression;
