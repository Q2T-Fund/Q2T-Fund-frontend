import React, { Component } from 'react';
import { Page, Section } from 'react-page-layout';
import { Grid, Image } from 'semantic-ui-react';

const GridExampleRows = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
export default class DummyPage extends Component {
  render() {
    return (
      <Page layout="base">
        <Section slot="page-content">
          <GridExampleRows/>
        </Section>
      </Page>
    )
  }
}