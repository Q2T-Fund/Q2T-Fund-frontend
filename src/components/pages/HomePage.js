import React, { useState } from "react";
import '../css/HomePage.css'
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react'

import { SkillWallet } from "../skillWallet"

import metamask from '../../assets/metamask.svg'
import skillwallet from '../../assets/skillwallet.png'
import newuser from '../../assets/newuser.png'

import { Link, useHistory } from "react-router-dom"

const HomePage = () => {

  return (
    <X01IWantTo {...X01IWantToData} />
  );
}

export default HomePage;


function X01IWantTo(props) {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  let history = useHistory()

  const loginWithSkillWallet = async (pageRedirect) => {
    const addresses = await window.ethereum.enable()
    await SkillWallet.init(addresses[0]);
    const res = await SkillWallet.get();
    console.log(res);
    if (!res) {
      // Show error;
      return;
    }
    localStorage.setItem('skillWallet', JSON.stringify(res));
    localStorage.setItem('skillWalletID', await SkillWallet.getSkillWalletID());
    history.push(pageRedirect);
  }

  const loginWithMetamask = async (pageRedirect) => {
    await window.ethereum.enable()
    history.push(pageRedirect);
  }

  const spanSmallText = {
    "font-weight": "100",
    "font-size": "medium"
  }
  const spanBigText = {
    "font-weight": "600",
    "font-size": "larger"
  }
  const modal1 = () => {

    return (
      <Modal
        basic
        closeIcon
        onClose={() => setOpen1(false)}
        onOpen={() => setOpen1(true)}
        open={open1}
        size='small'
        trigger={<Button size="massive" color="black" className="button1">
          <span style={spanBigText}>Support</span><br></br>
          <span style={spanSmallText}>Public Goods.</span>
        </Button >}
      >
        <Header icon>
          <Icon name='ethereum' />
          Log in
        </Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Image src={metamask} size="tiny" className="login-icons"></Image>
              <Button size="massive" color="black" onClick={() => loginWithMetamask('/delegate')}>Metamask</Button>
            </Grid.Row>
            <Grid.Row >
              <Image src={skillwallet} size="tiny" className="login-icons" />
              <Button size="massive" color="black" onClick={() => {
                loginWithSkillWallet('/delegate')
                setOpen1(false)
              }
              }>SkillWallet</Button>
            </Grid.Row>

          </Grid>
        </Modal.Content>
      </Modal >
    )
  }




  const modal2 = () => {

    return (
      <Modal
        basic
        closeIcon
        onClose={() => setOpen2(false)}
        onOpen={() => setOpen2(true)}
        open={open2}
        size='small'
        trigger={<Button size="massive" color="black" className="button2">
          <span style={spanBigText}>Fund</span><br></br>
          <span style={spanSmallText}>my Project.</span>
        </Button >}
      >
        <Header icon>
          <Icon name='ethereum' />
          Log in
        </Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Image src={skillwallet} size="tiny" className="login-icons" />
              <Button size="massive" color="black" onClick={() => {
                loginWithSkillWallet('/stake')
                setOpen2(false)
              }
              }>Skillwallet</Button>
            </Grid.Row>

            <Grid.Row>
              <Image src={newuser} size="tiny" className="login-icons" />
              <Button size="massive" color="black" onClick={() => window.open('https://app.distributed.town/community/join', '_blank')}>New User</Button>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    )
  }

  const {
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    iWantTo,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    image2Props,
  } = props;

  return (
    <div className="x01-i-want-to">
      <div className="rectangle-1596 border-class-1"></div>
      <div className="overlap-group">
        <div className="quadratic-treasury raleway-medium-ebb-24px">
          <span className="span">{spanText}</span>
          <span className="span-1">{spanText2}</span>
          <span className="span">{spanText3}</span>
          <span className="span-1">{spanText4}</span>
          <span className="span">{spanText5}</span>
          <span className="span-1">{spanText6}</span>
          <span className="span">{spanText7}</span>
          <span className="span-1">{spanText8}</span>
        </div>
      </div>
      <div className="overlap-group1">
        <Image2 image2={image2Props.image2} />

        <h1 className="i-want-to raleway-semi-bold-black-40px">{iWantTo}</h1>
        <div className="buttons">

          {modal1()}
          {modal2()}
        </div>
      </div>
    </div>
  );
}


function Image2(props) {
  const { image2 } = props;

  return <img className="image-2" src={image2} />;
}
const image2Data = {
  image2: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-2-1@1x.png",
};

// We could import this as JSON from a separate file
const X01IWantToData = {
  spanText: "Quadratic Treasury",
  spanText2: " (",
  spanText3: "Q2T",
  spanText4: <>) uses Quadratic Funding to fund (and fundraise for) projects in the area of public goods.<br /><br />It’s fair, and sybil-resistant. <br />And it’s the first decentralized platform to combine math and unique, non-forgeable identities to </>,
  spanText5: "fully automate",
  spanText6: " the funding process. ",
  spanText7: "Continuously",
  spanText8: ", and in a milestone-based approach.",
  iWantTo: "I want to",
  spanText9: "Support",
  spanText10: <><br /></>,
  spanText11: "Public Good",
  spanText12: <>Fund<br /></>,
  spanText13: "my Project.",
  image2Props: image2Data,
};

