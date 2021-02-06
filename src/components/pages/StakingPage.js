import React, { useState } from "react";
import { DatePicker } from "antd"

import { Page, Section } from 'react-page-layout';

import StakingForm from '../forms/StakingForm'

import 'antd/dist/antd.css';
import "../css/DelegationPage.css"

export default function StakingPage() {

  return (
    <Page layout="base">
      {/* <Section slot="row1-col1">
      </Section>
      <Section slot="row1-col2">
      </Section>
      <Section slot="row1-col3">
      </Section> */}

      <Section slot="row2-col1">
        <StakingForm />
      </Section>
    </Page>
  )
}