import React, { Component } from 'react';
import { Slot } from 'react-page-layout';
import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

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
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
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
      <Sidebar.Pushable style={{ overflow: 'hidden'}} style={{ height: '100vh' }}>
        <VerticalSidebar
          animation={this.state.animation}
          direction={this.state.direction}
          visible={this.state.visible}
        />
        <Sidebar.Pusher
          dimmed={this.state.dimmed && this.state.visible}>
          <Slot name="page-content" />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
