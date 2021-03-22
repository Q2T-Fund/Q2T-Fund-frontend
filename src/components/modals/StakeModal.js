import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import { SkillWallet } from "../wallets/skillWallet"
import skillwallet from '../../assets/skillwallet.png'
import {useHistory } from "react-router-dom"
import newuser from '../../assets/newuser.png'

const StakeModal = () => {
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

    return (
        <Modal
          basic
          closeIcon
          onClose={() => setOpen2(false)}
          onOpen={() => setOpen2(true)}
          open={open2}
          size='small'
          trigger={<Button size="massive" color="black" className="button2">
            <span className="spanBigText">Fund</span><br></br>
            <span className="spanSmallText">my Project.</span>
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

export default StakeModal;