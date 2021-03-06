import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import skillwallet from '../../assets/skillwallet.png'
import metamask from '../../assets/metamask.svg'

import { useHistory } from "react-router-dom"
import SkillWalletQRModal from '../common/SkillWalletModal';

const DelegateModal = () => {
  const [open1, setOpen1] = useState(false)

  let history = useHistory()

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const modalText = [
    'Scan with your ',
    <a href="https://distributed.town" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
    ' to support public goods.'];
  
  const loginWithMetamask = async (pageRedirect) => {
    await window.ethereum.enable()
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
        trigger={<Button size="massive" color="black" className="button1-homepage" style={{ width: "9em" }}>
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
                toggleModal()
                setOpen1(false)
              }
              }>SkillWallet</Button>
            </Grid.Row>

          </Grid>
        </Modal.Content>
      </Modal >
      { showModal ? <SkillWalletQRModal toggleModal={toggleModal} key={'delegate'} modalText={modalText} redirectPage={'/delegate'} /> : null}
    </div>
  )
}

export default DelegateModal;