import React, { Component } from 'react';
import { Slot } from 'react-page-layout';
import {
  Button,
  Icon,
  Menu,
  Container,
  Sidebar,
  Image
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
      <Sidebar.Pushable style={{ overflow: 'hidden', height: '100vh', width: '100vw' }}>
        <VerticalSidebar
          animation={this.state.animation}
          direction={this.state.direction}
          visible={this.state.visible}
        />
        <Sidebar.Pusher dimmed={this.state.dimmed && this.state.visible}>
          <div style={{
            height: '100vh', backgroundColor: '#1b1c1d', padding: '1em', width: '5em', display: 'inline-block'
          }}>
            <Button onClick={() => this.setState({ visible: !this.state.visible })}>
              <Button.Content>
                <Icon name='content' />
              </Button.Content>
            </Button>
          </div>
          <Slot name="page-content" />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
