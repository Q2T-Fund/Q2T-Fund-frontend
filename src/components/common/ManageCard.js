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
            <img className="image-7" src={cardImage} />

            <div className={"title-white-card raleway-bold-alto-22px"}>
              {props.title}
            </div>
          </div>

          <div className={"description-white-card raleway-normal-alto-18px"}>
            {props.description}
          </div>

          <img className="line-26" src={cardLineBreak} />
          
          <div className={"stats raleway-normal-alto-13px"}>
            <img className="image-icon milestones-img" src={milestoneChain} />
            Open milestones: {3}
          </div>

          <div className={"stats raleway-normal-alto-13px"}>
          <img className="image-icon" src={credits} />
            Credits: {2160}/{3840}
          </div>

          <div className={"stats raleway-normal-alto-13px"}>
          <img className="image-icon" src={funds} />
            Funds: {1200} USDCs
          </div>
          <div className="manage-page submit-button-container">
              <Link to="/milestones">
                <button type="submit" className="submit-button">Manage </button>
              </Link>
                  </div>
        </div>
      );
}

export default ManageCard;