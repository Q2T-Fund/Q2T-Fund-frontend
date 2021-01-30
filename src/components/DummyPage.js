import React, { Component } from 'react';
import { Page, Section } from 'react-page-layout';

export default class DummyPage extends Component {
  render() {
    return (
      <Page layout="base">
        <Section slot="page-content">
          <h1> THIS IS THE PAGE CONTENT </h1>
        </Section>
      </Page>
    )
  }
}