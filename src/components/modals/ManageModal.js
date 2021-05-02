import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import skillwallet from '../../assets/skillwallet.png'
import SkillWalletQRModal from '../common/SkillWalletModal';

const ManageModal = () => {
  const [open1, setOpen1] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const modalText = [
    'Scan with your ',
    <a href="https://distributed.town" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
    ' to manage your project.'];

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
              <Button size="massive" color="black" onClick={() => {
                toggleModal()
                // () => {loginWithSkillWallet('/manage')
                setOpen1(false)
              }
              }>SkillWallet</Button>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal >
      { showModal ? <SkillWalletQRModal toggleModal={toggleModal} key={'manage'} modalText={modalText} redirectPage={'/manage'} /> : null}
    </div>
  )
}

export default ManageModal;