import "./ExperienceItem.scss";
import PropTypes from "prop-types";

export default function ExperienceItem({ props }) {
  return (
    <div className="experience-item">
      <div className="experience-item__details">
        <h1 className="experience-item__details__title">{props.jobType}</h1>
        <p className="experience-item__details__company">
          {props.institutionType === "company" ? (
            <span>&#x1F3E2;</span>
          ) : (
            <span>&#x1F393;</span>
          )}{" "}
          {props.company}
        </p>
        <p className="experience-item__details__location">
          {" "}
          <span>&#x1F3E0;</span> {props.wayOfWork}
        </p>
      </div>
      <div className="experience-item__period">
        <p>
          {" "}
          &#128198;{`${props.date.beginning}`} &#x27A1;
          {`${props.date.currentOrEnd}`}
        </p>
        <h2>{props.workType}</h2>
      </div>
    </div>
  );
}

ExperienceItem.prototype = {
  jobType: PropTypes.string,
  company: PropTypes.string,
  wayOfWork: PropTypes.string,
  workType: PropTypes.string,
  date: PropTypes.shape({
    beginning: PropTypes.string,
    currentOrEnd: PropTypes.string,
  }),
  institutionType: PropTypes.string,
};
