import React from "react";
import cardImage from "../../assets/geometric-card-icon.png";
import cardLineBreak from "../../assets/geometric-card-line-break.png";
import credits from "../../assets/credits.png";
import funds from "../../assets/funds.png";
import milestoneChain from "../../assets/milestone-chain.png";
import "../css/ManagePage.css";
import { Link } from "react-router-dom";

const ManageCard = (props) => {

    return (
        <div className={'white-card'} onClick={props.onClick}>
          <div className="top-card">
            <img className="image-7" alt='card' src={cardImage} />

            <div className={"title-white-card raleway-bold-alto-22px"}>
              {props.title}
            </div>
          </div>

          <div className={"description-white-card raleway-normal-alto-18px"}>
            {props.description}
          </div>

          <img className="line-26" alt='card line' src={cardLineBreak} />
          
          <div className={"stats raleway-normal-alto-13px"}>
            <img className="image-icon milestones-img" alt='milestone' src={milestoneChain} />
            Open milestones: {props.openMilestones}
          </div>

          <div className={"stats raleway-normal-alto-13px"}>
          <img className="image-icon" alt='credits' src={credits} />
            Credits: {props.credits}/{3840}
          </div>

          <div className={"stats raleway-normal-alto-13px"}>
          <img className="image-icon" alt='funds' src={funds} />
            Funds: {props.funds} USDCs
          </div>
          <div className="manage-page submit-button-container">
              <Link to={`/milestones?projectId=${props.projectId}`}>
                <button type="submit" className="submit-button">Manage</button>
              </Link>
          </div>
        </div>
      );
}

export default ManageCard;