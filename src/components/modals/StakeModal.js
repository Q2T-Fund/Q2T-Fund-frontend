import React, { useState } from "react";
import '../css/HomePage.css';
import { Button, Modal, Header, Icon, Grid, Image } from 'semantic-ui-react';
import skillwallet from '../../assets/skillwallet.png'
import SkillWalletQRModal from '../common/SkillWalletModal';

const StakeModal = () => {
    const [open2, setOpen2] = useState(false)
  
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
  
    const modalText = [
      'Scan with your ', 
      <a href="" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>, 
      ' to stake your funds.'];
  
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
              <Grid.Row>
                <Image src={skillwallet} size="tiny" className="login-icons-homepage" />
                <Button size="massive" color="black" onClick={() => {
                  toggleModal()
                  setOpen2(false)
                }
                }>SkillWallet</Button>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        { showModal ? <SkillWalletQRModal toggleModal={toggleModal} key={'stake'} modalText={modalText} redirectPage={'/stake'} /> : null}
        </div>
      )
}

export default StakeModal;