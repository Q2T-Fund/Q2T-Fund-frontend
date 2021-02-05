
import React, { useState } from "react";

// import { DatePicker } from "antd"
import { notification } from 'antd';
import { HeartOutlined } from "@ant-design/icons"

import 'antd/dist/antd.css';
import "../css/DelegationPage.css"
import '../css/BaseLayout.css'

import { Page, Section } from 'react-page-layout';
import { ethers } from 'ethers'

import { Form, Input, Slider, Radio } from 'formik-antd'
import { Formik } from 'formik'


require('dotenv').config()

// why is '../../' !== '/....' ????????


const { treasuryAbi } = require('../../contracts/abi/TreasuryDAO.abi.json')
const { erc20abi } = require('../../contracts/abi/ERC20.abi.json')
const testAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"cars","outputs":[{"internalType":"string","name":"model","type":"string"},{"internalType":"uint256","name":"stateNumber","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_govNumber","type":"uint256"},{"internalType":"string","name":"_model","type":"string"}],"name":"createRandomCar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getMessage","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ind","type":"uint256"}],"name":"retrieveRandomCar","outputs":[{"components":[{"internalType":"string","name":"model","type":"string"},{"internalType":"uint256","name":"stateNumber","type":"uint256"}],"internalType":"struct Storage.Car","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]



const treasuryContractAddress ="0x5A29c96878764519E9266A87543E97211aA8283c"
const randomTestContractAddress = "0xCAbA441fa695bB1cFd80276698c20b78Ce9525c7"
const daiContractAddress = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD"

const e18 = "000000000000000000";






const openNotification = (title, description, success) => {
  notification.open({
    message: `${title}`,
    description: `${description}`,
    duration: 0,
    icon: <HeartOutlined />
  });
}



export const approveDai = async (address, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    daiContractAddress,
    erc20abi,
    signer,
  );

  const newAmount = amount.toString() + e18

  const createTx = await contract.approve(address, newAmount);

  const transactionResult = await createTx.wait();

  console.log('dai_approve(): ', transactionResult)
  const { events } = transactionResult;

  console.log('events: ',events);
  // const createdEvents = events.find(
  //   e => e.event === 'Approve',
  // );

  // if (!createdEvents) {
  //   throw new Error('Something went wrong');
  // } else {
  //   console.log('Event was found', createdEvents)
  // }

}

export const depositTx = async (currency, amount, repaymentPercent) => {
  // const provider = new ethers.providers.getDefaultProvider("kovan")
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    treasuryContractAddress,
    treasuryAbi,
    signer,
  );

  const createTx = await contract.deposit(currency, amount, repaymentPercent);
  const transactionResult = await createTx.wait();


  console.log('deposit results: ', transactionResult)
  const { events } = transactionResult;

  console.log('events: ', events);
  const createdEvents = events.find(
    e => e.event === 'Deposited',
  );

  if (!createdEvents) {
    console.log("event not found: ")
    openNotification("Transaction Failed!", `Something went wrong... Make sure to confirm both metamask prompts.`, false)
  } else {
        
    console.log('Event was found', createdEvents)
    const etherScanLink = `https://kovan.etherscan.io/tx/${createdEvents.transactionHash}`


    openNotification("Transaction Success!", `Congratulations, you can view your transaction here: ${etherScanLink}`, true)
  }
};





const ContractInteraction = () => {




    return (
      <>


      <Formik
        initialValues={{
          tokenAmount: 0,
          repaymentPercent: 0,
          totalReturn: 0,
          currency: 'DAI'
        }}
        validate={values => {
          const errors = {};
          if (!values.tokenAmount) {
          errors.tokenAmount = 'Required';
          } else if (values.tokenAmount <= 0) {
            errors.tokenAmount = 'Provide a valid amount.';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting } ) => {


          // await depositTx(values.currency, values.tokenAmount, values.repaymentPercent)
          await approveDai(treasuryContractAddress, values.tokenAmount)
          await depositTx(values.currency, values.tokenAmount, values.repaymentPercent)
          
        }}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
          }) => (
          <Form onSubmit={handleSubmit}>

            <>
            <div class="x01b-delegation-agreement dove-gray-border-1px">
              <div class="title raleway-bold-black-22px">Your Delegation Agreement</div>
                <div class="overlap-group">
                  <img
                    class="path-1491"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491@1x.png"
                  />
                  <p class="by-delegating-the-tr raleway-normal-black-14px-2">
                    <span class="span"
                    >By delegating the Treasury, you can fund and support projects for the Public Goods. The Quadratic Treasury will
                    be “locking” these funds to provide “</span
                    ><span class="span1-DQxoii">non-repayable loans</span
                    ><span class="span"
                    >” to these projects using Quadratic Funding and a milestone-based approach to prevent any form of fraud and
                    collusion.</span
                    >
                  </p>
                </div>
                <div class="auto-flex6">
                  <div class="auto-flex3">
                    <div class="auto-flex">
                      <div class="amount raleway-semi-bold-black-18px">Amount</div>

                      <Input
                        type="number"
                        name="tokenAmount"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tokenAmount}
                        placeholder="5000"
                        className="overlap-group1"
                      />
                    { <div>{errors.tokenAmount}</div> }

                      <div class="group-1330">

                    <Radio.Group name="currency" onBlur={handleBlur} value={values.currency}>
                      <Radio value={"DAI"}>DAI</Radio>
                      <Radio value={"USDC"}>USDC</Radio>
                    </Radio.Group>

                      </div>
                    </div>
                    <div class="auto-flex2">
                      <div class="repayment-structure raleway-semi-bold-black-18px">Repayment Structure</div>
                      <p class="text-1 raleway-normal-black-14px">
                        Decide whether you want it to be a full donation, or receive back part of your funds.
                    </p>



                      <div class="auto-flex1">
                        <div class="number-1 raleway-bold-black-14px">0</div>



                        <Slider
                          name="repaymentPercent"
                          min={0}
                          max={50}
                          color="black"
                          onBlur={handleBlur}
                          value={values.repaymentPercent}
                          className="repayment-percent-bar"
                        />


                        <div class="number-2 raleway-bold-black-14px">50</div>

                      </div>

                    <div class="repayment-percent-number raleway-normal-black-14px">
                      {`${values.repaymentPercent} % Repayment Percent`}
                    </div>


                    </div>
                  </div>


                  <div class="auto-flex5">
                    <div class="your-return raleway-semi-bold-black-18px">Your Return</div>
                    <p class="text-2 raleway-normal-black-14px">
                      This is how much you will receive back from your funds. Plus interest!
                    </p>
                    <div class="auto-flex4">
                      <div class="rectangle-621-1"></div>
                      <div class="price raleway-bold-black-14px">{`${((values.repaymentPercent / 100) * values.tokenAmount).toFixed(0)} USD`}</div>
                    </div>
                  </div>

                  <div class="submit-button-container">
                    <button type="submit" class="submit-button">
                      Delegate & Support! 
                    </button>
                  </div>
                </div>
              </div>

              <div class="message-container">
                <div class="success-font">{null}</div>
                </div>
            </>

            </Form>
          )}
          </Formik>

      </>
    )

}


const Card = (props) => {

const handleClick = (e) => {
  e.preventDefault()
  alert(`category number (name): ${props.category}`)
}

return (
<div className={props.type} onClick={handleClick}>
  <div className="auto-flex">
    <img className="image-7" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png" />
    <div className="title raleway-bold-alto-22px">
      {props.title}</div>
  </div>
  <div className="description raleway-normal-alto-18px">{props.description}</div>
  <img className="line-26" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png" />
  <div className="articles raleway-normal-alto-13px">
    xx Active Projects
  </div>
</div>
)
}



const DelegationPage = () => {

  return (
    <Page layout="base">
      <Section slot="row1-col1">
        <Card type="black-card" title={<>Blockchain & <br/> Open Source</>} description={"Develop cool stuff"} category="blockchain"/>
      </Section>
      <Section slot="row1-col2">
        <Card type="unavailable-card" title={<>Arts, Events <br/> & Lifestyle</>} description={"Coming soon!"} category="arts"/>
      </Section>
      <Section slot="row1-col3">
        <Card type="unavailable-card" title={<>Local <br/> Communities</>} description={"Coming soon!"} category="local"/>
      </Section>

      <Section slot="row2-col1">
        <ContractInteraction />
      </Section>


    </Page>
  )
}




export default DelegationPage;


