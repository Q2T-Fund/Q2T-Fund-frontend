import React from "react";
import cardLineBreak from "../../assets/geometric-card-line-break.png";

const Card = (props) => {
    const isBlackCard = props.type === "black-card";

    return (
        <div className={props.type} onClick={props.onClick}>
          <div className="top-card">
            <img className="image-7" src={props.image} alt="card-logo"/>

            <div className={isBlackCard ? "title raleway-bold-alto-22px" : "title-white-card raleway-bold-alto-22px"}>
              {props.title}
            </div>
          </div>

          <div className={isBlackCard ? "description raleway-normal-alto-18px" : "description-white-card raleway-normal-alto-18px"}>
            {props.description}
          </div>

          <img className="line-26" src={cardLineBreak} alt="line" />
          
          <div className={isBlackCard ? "articles raleway-normal-alto-13px" : "articles-white-card raleway-normal-alto-13px"}>
            {props.activeProjects} Active Projects
          </div>
        </div>
      );
}

export default Card;