import React, { useEffect, useState } from "react";
import '../css/HomePage.css';
import { useHistory } from "react-router-dom"
import QRModal from '../common/QRModal';
import { fetchUniqueStringForLogin, checkSuccessfulLogin, getSkillWallet } from '../../api/login';

const SkillWalletQRModal = (props) => {

  let history = useHistory()
  const [showModal, setShowModal] = useState(false);
  const [encodeString, setEncodeString] = useState();
  const [tokenId, setTokenId] = useState(3);
  const toggleModal = () => setShowModal(!showModal);

  const modalText = [
    'Scan with your ',
    <a href="https://distributed.town" className="underline text-blue-600 hover:text-blue-400 visited:text-purple-400" >SkillWallet App</a>,
    ' to support public goods.'
  ];


  useEffect(() => {
    const longpoll = async (str) => {
      if (tokenId === -1) {
        async function authenticationLongPoll(interval, pollAttemptsCount) {
          const response = await checkSuccessfulLogin(str);
          console.log(`poll ${pollAttemptsCount}`);
          if (response.tokenId)
            setTokenId(response.tokenId);
          if (!response.tokenId && pollAttemptsCount > 0) {
            setTimeout(() => {
              authenticationLongPoll(interval, --pollAttemptsCount);
            }, interval);
          } else {
            console.log('sasdasdads')
            localStorage.setItem('tokenId', tokenId);
            console.log(tokenId)
            const skillWallet = await getSkillWallet(tokenId);
            console.log(skillWallet);
            console.log('push');
            console.log(props.redirectPage);
            history.push(props.redirectPage);
            return;
          }
        }
        await authenticationLongPoll(3000, 20);
      } else {
        console.log('aaa');
        console.log('adsadasdasda')
        localStorage.setItem('tokenId', tokenId);
        const skillWallet = await getSkillWallet(tokenId);
        localStorage.setItem('skillWallet', JSON.stringify(skillWallet));
        console.log(skillWallet);
        console.log('push');
        console.log(props.redirectPage);
        history.push(props.redirectPage);
        return;
      }
    }
    const login = async () => {
      const uniqueString = await fetchUniqueStringForLogin();
      setEncodeString(uniqueString);
      toggleModal();
      await longpoll(uniqueString.uniqueString);
    }
    login();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <QRModal toggleModal={toggleModal} key={'delegate'} modalText={modalText} encodeString={encodeString} onClose={toggleModal} />
    </div>
  )
}

export default SkillWalletQRModal;