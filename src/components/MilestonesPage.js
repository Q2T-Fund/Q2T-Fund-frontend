import React from 'react';
import { Page, Section } from "react-page-layout";
import cardImage from "../assets/geometric-card-icon.png";
import cardLineBreak from "../assets/geometric-card-line-break.png";
import funds from "../assets/funds.png";
import credits from "../assets/credits.png";
import MilestoneCard from "./common/MilestoneCard";
import { Link } from "react-router-dom";
import './css/ManagePage.css';

const MilestonesPage = () => {
    return (
      <Page layout="milestones" id="milestonesPageContent">
        <h1>Ongoing Milestones</h1>

        <Section slot="row1-col1">
        <MilestoneCard
          title={
            <>
              Milestone title
            </>
          }
          description="this is a description of 280 chars, just like a tweet that can be shared - to boost a milestone, or
          invite members and complete it faster. this is a description of 280 chars, just like a tweet that can be shared - to boost a milestone, or
          invite members and complete it faster."
          category="blockchain"
          activeProjects={2}
        />
      </Section>
        <Section slot="row1-col2">
        <MilestoneCard
          title={
            <>
              Milestone title
            </>
          }
          description="this is a description of 280 chars, just like a tweet that can be shared - to boost a milestone, or
          invite members and complete it faster. this is a description of 280 chars, just like a tweet that can be shared - to boost a milestone, or
          invite members and complete it faster."
          category="blockchain"
          category="arts"
          activeProjects="xx"
        />
      </Section>
        <Section slot="row1-col3">
        <MilestoneCard
          title={
            <>
              Milestone title
            </>
          }
          description="this is a description of 280 chars, just like a tweet that can be shared - to boost a milestone, or
          invite members and complete it faster. this is a description of 280 chars, just like a tweet that can be shared - to boost a milestone, or
          invite members and complete it faster."
          category="blockchain"
          category="local"
          activeProjects="xx"
        />
      </Section>

        <Section slot="row2-col1" className="mi">
          <div className="milestones-page submit-button-container">
            <Link to="/create-milestone">
              <button className="submit-button">Create new Milestone</button>
            </Link>
          </div>
        </Section>

        <Section slot="row2-col2">
              <div className='white-card milestones-project-card'>
                  <div className="milestones-sub-title">
                    <img className="image-7" src={cardImage} />

                    <div className={"title-white-card raleway-bold-alto-22px"}>
                      Project Title
                    </div>
                  </div>

                  <div className={"description-white-card raleway-normal-alto-18px"}>
                  this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
                  invite members or keep track of your progress this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
                  invite members or keep track of your progress
                  </div>

                  <img className="line-26" src={cardLineBreak} />
                  
                  <div>
                      <div className={"stats raleway-normal-alto-13px"}>
                        <img className="image-icon" src={credits} />
                        Credits: {2160}/{3840}
                      </div>

                      <div className={"stats raleway-normal-alto-13px"}>
                        <img className="image-icon" src={funds} />
                        Funds: {1200} USDCs
                      </div>
                  </div>
                  <div className="manage-page submit-button-container">
                      <Link to="/manage">
                        <button type="submit" className="submit-button">Back to Dashboard </button>
                      </Link>
                  </div>
                </div>
          </Section>
    </Page>
    );
}

export default MilestonesPage;