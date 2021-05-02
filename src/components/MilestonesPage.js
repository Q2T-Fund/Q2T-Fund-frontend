import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Page, Section } from "react-page-layout";
import MilestoneCard from "./common/MilestoneCard";
import './css/ManagePage.css';
import { getMilestones } from '../api/community';

const MilestonesPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const [projectId] = useState(query.get('projectId'));
  const [milestones, setMilestones] = useState();
  useEffect(() => {
    const fetchProjects = async () => {
      // const skillWalletString = localStorage.getItem('skillWallet');
      // const skillWallet = JSON.parse(skillWalletString);
      // const mil = await getMilestones('0xF0F8AEC4D3552a0BE4D797EA93aE20dB8F643b99', projectId);
      const mil = await getMilestones('0xF0F8AEC4D3552a0BE4D797EA93aE20dB8F643b99', projectId);
      console.log(mil);
      setMilestones(mil);
    }
    fetchProjects();
  }, [projectId])
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
              skills={m.skills}
              credits={m.credits}
            />
          </Section>
        })}
    </Page>
  );
}

export default MilestonesPage;