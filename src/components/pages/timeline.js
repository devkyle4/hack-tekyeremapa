import React from "react";
import "../styles/timeline.css";

const TimelineItem = ({ title, startDate, endDate, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot">
        <svg viewBox="0 0 24 24" width="24" height="24" className="check-icon">
          <polyline
            points="20 6 9 17 4 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="timeline-content">
        <div className="timeline-dates">
          <p>Start : {startDate}</p>
          <p>End : {endDate}</p>
        </div>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      title: "Hackathon Applications Open",
      startDate: "1-Feb-2025",
      endDate: "30-Mar-2025",
      description:
        "Submit your application to participate in the hackathon. Register early to avoid missing out!",
    },
    {
      title: "Selection of Final 8",
      startDate: "31-Mar-2025",
      endDate: "14-Apr-2025",
      description:
        "The final 8 teams will be selected based on their project proposals and submitted applications.",
    },
    {
      title: "Remote Mentoring",
      startDate: "21-Apr-2025",
      endDate: "18-May-2025",
      description:
        "Selected teams will receive mentoring remotely to refine their ideas and prepare for the face-to-face mentoring phase.",
    },
    {
      title: "Face to Face Mentoring",
      startDate: "19-May-2025",
      endDate: "25-May-2025",
      description:
        "Teams will engage in in-person mentoring to fine-tune their projects and get expert guidance.",
    },
    {
      title: "Hackathon Week",
      startDate: "26-May-2025",
      endDate: "30-May-2025",
      description:
        "The hackathon week begins, where teams will work intensively on their final presentations and projects.",
    },
  ];

  return (
    <div id="timelines" className="section timeline-container">
      <h2 className="timeline-header">Timelines</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
