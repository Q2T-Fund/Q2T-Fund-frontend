import React, { Component } from 'react';
import { Slot } from 'react-page-layout';
import {
  Button,
  Icon,
  Menu,
  Container,
  Sidebar,
  Image,
  Grid
} from 'semantic-ui-react'

import '../css/BaseLayout.css'

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Container>
      <Image src={"https://cdn.animaapp.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/photo-1@1x.png"}/>
    </Container>
    <Menu.Item as='a'>
      <Icon name='home' />
      Dashboard
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='line graph' />
      Your Stats
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='bell' />
      Notifications
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='setting' />
      Settings
    </Menu.Item>
  </Sidebar>
)

export default class BaseLayout extends Component {

  state = {
    animation: 'push',
    direction: 'left',
    dimmed: false,
    visible: true,
  }

  componentDidMount() {
  }

  render() {
    return (
      <Sidebar.Pushable>
        <VerticalSidebar
          animation={this.state.animation}
          direction={this.state.direction}
          visible={this.state.visible}
        />

        <Sidebar.Pusher dimmed={this.state.dimmed && this.state.visible}>

          <div class='sidebar-handle'>
            <Button onClick={() => this.setState({ visible: !this.state.visible })}>
              <Button.Content>
                <Icon name='content' />
              </Button.Content>
            </Button>
          </div>

          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column><Slot name="row1-col1" /></Grid.Column>
              <Grid.Column><Slot name="row1-col2" /></Grid.Column>
              <Grid.Column><Slot name="row1-col3" /></Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1}>
              <Grid.Column><Slot name="row2-col1" /></Grid.Column>
            </Grid.Row>
          </Grid>

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
