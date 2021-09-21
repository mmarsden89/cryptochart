import React, { useEffect } from "react";

const TimelineButtons = (props) => {
  const { onClick, timeline } = props;
  const timelineOptions = ["1Y", "1M", "1W", "24H", "1H"];

  useEffect(() => {}, [timeline]);

  const buttonHTML = timelineOptions.map((option) => (
    <button
      onClick={onClick}
      id={option}
      className={
        timeline === option
          ? "timeline-button active-timeline"
          : "timeline-button"
      }
      key={option}
    >
      {option}
    </button>
  ));
  return <>{buttonHTML}</>;
};

export default TimelineButtons;
