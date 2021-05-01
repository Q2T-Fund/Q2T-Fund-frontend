import React from 'react';
import { Page, Section } from "react-page-layout";
import MilestoneCard from "./common/MilestoneCard";

const MilestonesPage = () => {
    return (
        <Page layout="base" id="milestonesPageContent">
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
    </Page>
    );
}

export default MilestonesPage;