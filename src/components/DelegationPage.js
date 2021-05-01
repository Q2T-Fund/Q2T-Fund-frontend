import React, { useState } from "react";
import Card from './common/Card';
import { Page, Section } from "react-page-layout";
import DelegateForm from "./DelegateForm";
import artBlack from '../assets/art-nft-black.png';
import artWhite from '../assets/art-nft-white.png';
import localBlack from '../assets/local-dao-black.png';
import localWhite from '../assets/local-dao-white.png';
import openSourceBlack from '../assets/opensource-defi-black.png';
import openSourceWhite from '../assets/opensource-defi-white.png';
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
              Open-Source<br /> & DeFi
            </>
          }
          description="For researchers & web3, open-source teams, that innovate in a liberal fashion - for a more sustainable, meritocratic world."
          category="blockchain"
          activeProjects='xx'
          image={template === 'open-source' ? openSourceWhite : openSourceBlack }
          onClick={() => setTemplate('open-source')}
        />
      </Section>
      <Section slot="row1-col2">
        <Card
          type={template === 'art' ? 'white-card' : 'black-card'}
          title={
            <>
              Art, Events<br />& NFT <br />
            </>
          }
          description="Art movements, writers & creatives of all kind who use Art & provable ownership for purer forms of human interaction."
          category="arts"
          activeProjects="xx"
          image={template === 'art' ? artWhite : artBlack }
          onClick={() => setTemplate('art')}
        />
      </Section>
      <Section slot="row1-col3">
        <Card
          type={template === 'local' ? 'white-card' : 'black-card'}
          title={
            <>
              Local Projects<br />& DAO 
            </>
          }
          description="From support for people in need, to innovative local hubs to get together & create something greater than oneself."
          category="local"
          activeProjects="xx"
          image={template === 'local' ? localWhite : localBlack }
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
