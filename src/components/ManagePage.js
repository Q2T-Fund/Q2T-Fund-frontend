import React, { useEffect, useState } from "react";
import ManageCard from './common/ManageCard';
import { Page, Section } from "react-page-layout";
import "./css/ManagePage.css";
import 'antd/dist/antd.css';
import "./css/StakePage.css"
import { getProjects } from '../api/community';

const ManagePage = () => {

  const [projects, setProjects] = useState();
  useEffect(() => {
    const fetchProjects = async () => {
      const skillWalletString = localStorage.getItem('skillWallet');
      const skillWallet = JSON.parse(skillWalletString);
      const proj = await getProjects(skillWallet.currentCommunity.address);
      console.log(proj);
      setProjects(proj);
    }
    fetchProjects();
  }, [])
  return (

    <Page layout="base" id="managePageContent">
      <h1>Your Active Projects</h1>
      {typeof projects === 'undefined' ? (
        <div>
          <h2>Loading Projects...</h2>
        </div>
      ) : projects.length === 0 ? (
        <h2>There are no Projects in your community.</h2>
      ) :
        projects.map((proj, i) => {
          return <Section slot={`row${Math.floor((i / 3) + 1)}-col${i % 3 + 1}`}>
            <ManageCard
              key={i}
              title={proj.title}
              description={proj.description}
              category="blockchain"
              openMilestones={3}
              credits={2006}
              funds={proj.budget}
              projectId={proj.projectId}
            />
          </Section>
        })}
    </Page>
  );
};

export default ManagePage;