import React from "react";
import cardImage from "../../assets/geometric-card-icon.png";
import cardLineBreak from "../../assets/geometric-card-line-break.png";
import "../css/ManagePage.css";

const MilestoneCard = (props) => {

    return (
        <div className={'white-card'} onClick={props.onClick}>
          <div className="top-card">
            {/* <img className="image-7" src={cardImage} /> */}

            <div className={"title-white-card raleway-bold-alto-22px"}>
              {props.title}
            </div>
          </div>

          <div className={"description-white-card raleway-normal-alto-18px"}>
            {props.description}
          </div>
          <h4>Skills</h4>
          <div>
            <p>#thisskill</p>
            <p>#thatskill</p>
            <p>#ortheother</p>
          </div>

          <img className="line-26" src={cardLineBreak} />
          
          <div className={"articles-white-card raleway-normal-alto-13px"}>
            Worth: {12} Credits
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