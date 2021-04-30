import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import { SkillWallet } from "../wallets/skillWallet"
import skillwallet from '../../assets/skillwallet.png'
import {useHistory } from "react-router-dom"
import newuser from '../../assets/newuser.png'
import QRModal from '../common/QRModal';

const StakeModal = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
  
    let history = useHistory()

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
  
    const modalText = [
      'Scan with your ', 
      <a href="" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>, 
      ' to manage your project.'];
  
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
      <div>
        <Modal
          basic
          closeIcon
          onClose={() => setOpen2(false)}
          onOpen={() => setOpen2(true)}
          open={open2}
          size='small'
          trigger={<Button size="massive" color="black" className="button2-homepage">
            <span className="spanBigText-homepage">Fund</span><br></br>
            <span className="spanSmallText-homepage">my Project.</span>
          </Button >}
        >
          <Header icon>
            <Icon name='ethereum' />
            Log in
          </Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Image src={skillwallet} size="tiny" className="login-icons-homepage" />
                <Button size="massive" color="black" onClick={() => {
                  // loginWithSkillWallet('/stake')
                  toggleModal()
                  setOpen2(false)
                }
                }>Skillwallet</Button>
              </Grid.Row>
  
              <Grid.Row>
                <Image src={newuser} size="tiny" className="login-icons-homepage" />
                <Button size="massive" color="black" onClick={() => window.open('https://app.distributed.town/community/join', '_blank')}>New User</Button>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        { showModal ? <QRModal toggleModal={toggleModal} key={'stake'} modalText={modalText}/> : null}
        </div>
      )
}

export default StakeModal;