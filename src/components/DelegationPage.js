import React, { useState } from "react";
import Card from './common/Card';
import { Page, Section } from "react-page-layout";
import DelegateForm from "./DelegateForm";
import "antd/dist/antd.css";
import "./css/DelegationPage.css";
import "./css/BaseLayout.css";

require("dotenv").config();

const DelegationPage = () => {
  const [template, setTemplate] = useState('open-source');

  return (
    <Page layout="base" className="top-card">
      <Section slot="header">
        <div className="top-header">
          <h1 className="main-title">Support the Public Goods!</h1>
          <h4 className="subtitle">Choose the area and the type of Project you want to fund.</h4>
        </div>
      </Section>
      <Section slot="row1-col1">
        <Card
          type={template === 'open-source' ? 'white-card' : 'black-card'}
          title={
            <>
              Blockchain & <br /> Open Source
            </>
          }
          description="Help researchers and small, functional web3 teams to bring innovation and support the open-source movement for a more sustainable, collaborative world."
          category="blockchain"
          activeProjects={2}
          onClick={() => setTemplate('open-source')}
        />
      </Section>
      <Section slot="row1-col2">
        <Card
          type={template === 'art' ? 'white-card' : 'black-card'}
          title={
            <>
              Arts, Events <br /> & Lifestyle
            </>
          }
          description="Art groups, writers, and live events in all of their variety. From entertainment, to music performances - Art is the purest form of human connection."
          category="arts"
          activeProjects="xx"
          onClick={() => setTemplate('art')}
        />
      </Section>
      <Section slot="row1-col3">
        <Card
          type={template === 'local' ? 'white-card' : 'black-card'}
          title={
            <>
              Local <br /> Communities
            </>
          }
          description="Local Projects bring support to people in need - from impoverished areas, to innovative local hubs where locals can get together and create something greater than oneself."
          category="local"
          activeProjects="xx"
          onClick={() => setTemplate('local')}
        />
      </Section>

      <Section slot="row2-col1">
        <DelegateForm template={template} />
      </Section>
    </Page>
  );
};

export default DelegationPage;
