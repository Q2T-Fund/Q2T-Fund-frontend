import React, { Component } from 'react';
import { Page, Section } from 'react-page-layout';

import "../css/DelegationPage.css"
import '../css/BaseLayout.css'

const Card = () => (
  <div className="group-1325">
    <div className="auto-flex">
      <img className="image-7" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png" />
      <div className="title raleway-bold-alto-22px">
        Blockchain &<br />Open-Source</div>
    </div>
    <div className="description raleway-normal-alto-18px">"Description of this area of Public Goods."</div>
    <img className="line-26" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png" />
    <div className="articles raleway-normal-alto-13px">
      xx Active Projects
    </div>
  </div>
)
export default class DummyPage extends Component {
  render() {
    return (
      <Page layout="base">
        <Section slot="row1-col1">
          <Card />
        </Section>
      </Page>
    )
  }
}