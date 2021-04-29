import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import { SkillWallet } from "../wallets/skillWallet"
import metamask from '../../assets/metamask.svg'
import skillwallet from '../../assets/skillwallet.png'
import {useHistory } from "react-router-dom"

const DelegateModal = () => {
    const [open1, setOpen1] = useState(false)
  
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

    return (
        <Modal
          basic
          closeIcon
          onClose={() => setOpen1(false)}
          onOpen={() => setOpen1(true)}
          open={open1}
          size='small'
          trigger={<Button size="massive" color="black" className="button1-homepage" style={{width: "9em"}}>
            <span className="spanBigText-homepage">Support</span><br></br>
            <span className="spanSmallText-homepage">Public Goods.</span>
          </Button >}
        >
          <Header icon>
            <Icon name='ethereum' />
            Log in
          </Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Image src={metamask} size="tiny" className="login-icons-homepage"></Image>
                <Button size="massive" color="black" onClick={() => loginWithMetamask('/delegate')}>Metamask</Button>
              </Grid.Row>
              <Grid.Row >
                <Image src={skillwallet} size="tiny" className="login-icons-homepage" />
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

export default DelegateModal;