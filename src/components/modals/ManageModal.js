import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import { SkillWallet } from "../wallets/skillWallet"
import metamask from '../../assets/metamask.svg'
import skillwallet from '../../assets/skillwallet.png'
import {useHistory } from "react-router-dom"
import QRModal from '../common/QRModal';

const ManageModal = () => {
    const [open1, setOpen1] = useState(false);
  
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
          onClose={() => setOpen1(false)}
          onOpen={() => setOpen1(true)}
          open={open1}
          size='small'
          trigger={<Button size="massive" color="black" className="button1-homepage" style={{width: "9em"}}>
            <span className="spanBigText-homepage">Manage</span><br></br>
            <span className="spanSmallText-homepage">your Project.</span>
          </Button >}
        >
          <Header icon>
            <Icon name='ethereum' />
            Log in
          </Header>
          <Modal.Content>
            <Grid>
              <Grid.Row >
                <Image src={skillwallet} size="tiny" className="login-icons-homepage" />
                <Button size="massive" color="black" onClick={() =>
                  {toggleModal()
                  // () => {loginWithSkillWallet('/manage')
                         setOpen1(false)
                }
                }>SkillWallet</Button>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal >
        { showModal ? <QRModal toggleModal={toggleModal} key={'manage'} modalText={modalText}/> : null}
        </div>
      )
}

export default ManageModal;