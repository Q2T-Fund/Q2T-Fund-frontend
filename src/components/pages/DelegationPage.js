import React, { useState } from "react";
import { DatePicker } from "antd"

import { Page, Section } from 'react-page-layout';

import DelegateForm from '../DelegateForm'

import 'antd/dist/antd.css';
import "../css/DelegationPage.css"
import '../css/BaseLayout.css'

// <Input placeholder="Enter Value" onChange={handleValueChange} />
const Card = () => (
  <div className="black-card">
    <div className="auto-flex">
      <img className="image-7" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png" />
      <div className="title raleway-bold-alto-22px">
        {props.title}</div>
    </div>
    <div className="description raleway-normal-alto-18px">{props.description}</div>
    <img className="line-26" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png" />
    <div className="articles raleway-normal-alto-13px">
      xx Active Projects
    </div>
  </div>
  )
}


const DelegationPage = () => {

  return (
    <Page layout="base">
      <Section slot="row1-col1">
        <Card title={<>Blockchain & <br/> Open Source</>} description={"Develop cool stuff"} category="blockchain"/>
      </Section>
      <Section slot="row1-col2">
        <Card title={<>Arts, Events <br/> & Lifestyle</>} description={"Live a cool life"} category="arts"/>
      </Section>
      <Section slot="row1-col3">
        <Card title={<>Local <br/> Communities</>} description={"Live locally."} category="local"/>
      </Section>

      <Section slot="row2-col1">
        <DelegateForm />
      </Section>
    </Page>
  )
}




export default DelegationPage;
