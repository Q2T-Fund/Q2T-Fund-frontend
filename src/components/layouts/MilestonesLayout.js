import { getDefaultProvider } from "ethers";
import React, { Component } from "react";
import { Slot } from "react-page-layout";
import {
  Button,
  Icon,
  Menu,
  Container,
  Sidebar,
  Image,
  Grid,
} from "semantic-ui-react";

import Address from "../Address";

import "../css/BaseLayout.css";

export const VerticalSidebar = ({ animation, direction, visible }) => {
  const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";
  const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";

  const kovanProvider = getDefaultProvider("kovan", {
    infura: INFURA_ID,
    etherscan: ETHERSCAN_KEY,
    quorum: 1,
  });

  /*

  Displays an address with a blockie, links to a block explorer, and can resolve ENS

  <Address
    value={address}
    ensProvider={mainnetProvider}
    blockExplorer={optional_blockExplorer}
    fontSize={optional_fontSize}
  />

*/

  return (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Container>
        <Address
          value={window?.ethereum?.selectedAddress}
          ensProvider={kovanProvider}
        />
      </Container>
      <Menu.Item as="a">
        <Icon name="home" />
        Dashboard
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="line graph" />
        Your Stats
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="bell" />
        Notifications
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="setting" />
        Settings
      </Menu.Item>
    </Sidebar>
  );
};

export default class MilestonesLayout extends Component {
  state = {
    animation: "push",
    direction: "left",
    dimmed: false,
    visible: true,
  };

  componentDidMount() {}

  render() {
    return (
      <Sidebar.Pushable>
        <VerticalSidebar
          animation={this.state.animation}
          direction={this.state.direction}
          visible={this.state.visible}
        />

        <Sidebar.Pusher dimmed={this.state.dimmed && this.state.visible}>
          {/* <div className='sidebar-handle'>
            <Button onClick={() => this.setState({ visible: !this.state.visible })}>
              <Button.Content>
                <Icon name='content' />
              </Button.Content>
            </Button>
          </div> */}

          <Grid>
            <Grid.Row>
              <Slot className="header-top" name="header" />
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Slot name="row1-col1" />
              </Grid.Column>
              <Grid.Column>
                <Slot name="row1-col2" />
              </Grid.Column>
              <Grid.Column>
                <Slot name="row1-col3" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <Slot name="row2-col1" />
              </Grid.Column>
              <Grid.Column>
                <Slot name="row2-col2" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
