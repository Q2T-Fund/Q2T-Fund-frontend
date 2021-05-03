import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Page, Section } from "react-page-layout";
import MilestoneCard from "./common/MilestoneCard";
import './css/ManagePage.css';
import { getMilestones, getProjects } from '../api/community';
import cardImage from "../assets/geometric-card-icon.png";
import cardLineBreak from "../assets/geometric-card-line-break.png";
import funds from "../assets/funds.png";
import credits from "../assets/credits.png";
import { Link } from "react-router-dom";
import './css/ManagePage.css';

const MilestonesPage = (props) => {
  const [projectId] = useState(0);
  const [milestones, setMilestones] = useState();
  const [project, setProject] = useState();
  useEffect(() => {
    console.log('aaaa');
    const fetchProjects = async () => {
      const skillWalletString = localStorage.getItem('skillWallet');
      const skillWallet = JSON.parse(skillWalletString);
      console.log(skillWallet);
      console.log(projectId);
      // const mil = await getMilestones('0xF0F8AEC4D3552a0BE4D797EA93aE20dB8F643b99', projectId);
      const mil = await getMilestones(0);
      console.log(mil);
      console.log(mil.milestones);
      const projects = await getProjects(skillWallet.currentCommunity.address);
      console.log(projects);
      setProject(projects.find(p => p.projectId === projectId.toString()));
      setMilestones(mil ? mil.milestones : []);
    }
    fetchProjects();
  }, [])
  return (
    <Page layout="milestones" id="milestonesPageContent">
      <h1>Ongoing Milestones</h1>
      {typeof milestones === 'undefined' ? (
        <div>
          <h2>Loading Milestones...</h2>
        </div>
      ) : milestones.length === 0 ? (
        <h2>There are no milestones in the selected project.</h2>
      ) :
        milestones.map((m, i) => {
          return <Section slot={`row${Math.floor((i / 3) + 1)}-col${i % 3 + 1}`}>
            <MilestoneCard
              title={m.title}
              description={m.description}
              category="blockchain"
              skills={m.props.skills}
              credits={m.props.credits}
            />
          </Section>
        })}
      <Section slot="row2-col1" className="mi w-50">
        <div className="milestones-page submit-button-container">
          <Link to="/create-milestone">
            <button className="submit-button">Create new Milestone</button>
          </Link>
        </div>
      </Section>
      {project ? (
        <Section slot="row2-col2">
          <div className='white-card milestones-project-card'>
            <div className="milestones-sub-title">
              <img className="image-7" src={cardImage} />

              <div className={"title-white-card raleway-bold-alto-22px"}>
                {project.title}
              </div>
            </div>

            <div className={"description-white-card raleway-normal-alto-18px"}>
              {project.description}
            </div>

            <img className="line-26" src={cardLineBreak} />

            <div>
              <div className={"stats raleway-normal-alto-13px"}>
                <img className="image-icon" src={credits} />
                        Credits: {2006}/{3840}
              </div>

              <div className={"stats raleway-normal-alto-13px"}>
                <img className="image-icon" src={funds} />
                        Funds: {project.fundsNeeded} USDCs
                      </div>
            </div>
            <div className="manage-page submit-button-container">
              <Link to="/manage">
                <button type="submit" className="submit-button">Back to Dashboard </button>
              </Link>
            </div>
          </div>
        </Section>): null
      }
    </Page>
  );
}

export default MilestonesPage;