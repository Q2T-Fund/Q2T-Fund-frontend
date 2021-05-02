import React, { useState, useEffect } from "react";
import ManageCard from './common/ManageCard';
import { Page, Section } from "react-page-layout";
import "./css/ManagePage.css";
import { Formik } from 'formik';
import { Form, Input, Radio } from 'formik-antd';
import 'antd/dist/antd.css';
import "./css/StakePage.css"

const ManagePage = () => {
    const [state, setState] = useState({
        animation: 'push',
        direction: 'left',
        dimmed: false,
        visible: true,
      })

    return (

    <Page layout="base" id="managePageContent">
        <h1>Your Active Projects</h1>

        <Section slot="row1-col1">
        <ManageCard
          title={
            <>
              Title
            </>
          }
          description="this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
          invite members or keep track of your progress this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
          invite members or keep track of your progress"
          category="blockchain"
          activeProjects={2}
        />
      </Section>
      <Section slot="row1-col2">
        <ManageCard
          title={
            <>
              Title
            </>
          }
          description="this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
          invite members or keep track of your progress this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
          invite members or keep track of your progress"
          category="blockchain"
          category="arts"
          activeProjects="xx"
        />
      </Section>
      <Section slot="row1-col3">
        <ManageCard
          title={
            <>
              Title
            </>
          }
          description="this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
          invite members or keep track of your progress this is a description of 280 chars, just like a tweet that can be shared - to boost a project, 
          invite members or keep track of your progress"
          category="blockchain"
          category="local"
          activeProjects="xx"
        />
      </Section>
    </Page>
    );
};

export default ManagePage;