import React from "react";
import cardLineBreak from "../../assets/geometric-card-line-break.png";
import "../css/ManagePage.css";

const MilestoneCard = (props) => {

  return (
    <div className={'white-card'} onClick={props.onClick}>
      <div className="top-card">
        <div className={"title-white-card raleway-bold-alto-22px"}>
          {props.title}
        </div>
      </div>

      <div className={"description-white-card raleway-normal-alto-18px"}>
        {props.description}
      </div>
      <h4>Skills</h4>
      <div>
        {props.skills.map((s) => { return <p>{s}</p> })}
      </div>

      <img className="line-26" alt='card line' src={cardLineBreak} />

      <div className={"articles-white-card raleway-normal-alto-13px"}>
        Worth: {props.credits} Credits
          </div>

      <div className="manage-page submit-button-container">
        <button type="submit" className="submit-button">
          Work on this Milestone
        </button>
      </div>
    </div>
  );
}

export default MilestoneCard;