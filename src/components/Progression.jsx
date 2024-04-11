import React from "react";
import Title from "./Title";
import timelines from "../data/timelines";
import TimelineItem from "./TimelineItem";

function Progression() {
  return (
    <div className="dark:text-gray-50">
      <Title>Progression/Timeline</Title>
      <div className="flex flex-col md:flex-row justify-center my-20 w-full md:w-7/12">
        {timelines.map((timeline) => {
          <TimelineItem
            year={timeline.year}
            title={timeline.title}
            duration={timeline.duration}
            details={timeline.details}
          />;
        })}
      </div>
    </div>
  );
}

export default Progression;

