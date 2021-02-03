
import React, { useState } from "react";

import { DatePicker } from "antd"

import 'antd/dist/antd.css';
import "../css/DelegationPage.css"
import '../css/BaseLayout.css'

// import { Slider } from "react-semantic-ui-range";
import { Page, Section } from 'react-page-layout';
import { ethers } from 'ethers'

import { Form, Input, Slider, Radio } from 'formik-antd'
import { Formik } from 'formik'


require('dotenv').config()


//const { abi } = require('.../contracts/abi/TreasuryDAO.abi.json')

const abi = [	
  {	
    "inputs": [	
      {	
        "internalType": "enum DataTypes.CommunityTemplate",	
        "name": "_template",	
        "type": "uint8"	
      },	
      {	
        "internalType": "address",	
        "name": "_aaveDataProvider",	
        "type": "address"	
      },	
      {	
        "internalType": "address",	
        "name": "_dai",	
        "type": "address"	
      },	
      {	
        "internalType": "address",	
        "name": "_usdc",	
        "type": "address"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "constructor"	
  },	
  {	
    "anonymous": false,	
    "inputs": [	
      {	
        "indexed": false,	
        "internalType": "address",	
        "name": "_treasuryAddress",	
        "type": "address"	
      },	
      {	
        "indexed": false,	
        "internalType": "address",	
        "name": "_communityAddress",	
        "type": "address"	
      },	
      {	
        "indexed": false,	
        "internalType": "uint256",	
        "name": "_id",	
        "type": "uint256"	
      }	
    ],	
    "name": "CommunityLinked",	
    "type": "event"	
  },	
  {	
    "anonymous": false,	
    "inputs": [	
      {	
        "indexed": false,	
        "internalType": "address",	
        "name": "_depositor",	
        "type": "address"	
      },	
      {	
        "indexed": false,	
        "internalType": "string",	
        "name": "_currency",	
        "type": "string"	
      },	
      {	
        "indexed": false,	
        "internalType": "uint256",	
        "name": "_amount",	
        "type": "uint256"	
      }	
    ],	
    "name": "Deposited",	
    "type": "event"	
  },	
  {	
    "anonymous": false,	
    "inputs": [	
      {	
        "indexed": true,	
        "internalType": "address",	
        "name": "previousOwner",	
        "type": "address"	
      },	
      {	
        "indexed": true,	
        "internalType": "address",	
        "name": "newOwner",	
        "type": "address"	
      }	
    ],	
    "name": "OwnershipTransferred",	
    "type": "event"	
  },	
  {	
    "anonymous": false,	
    "inputs": [	
      {	
        "indexed": false,	
        "internalType": "uint256",	
        "name": "_id",	
        "type": "uint256"	
      }	
    ],	
    "name": "ThresholdReached",	
    "type": "event"	
  },	
  {	
    "inputs": [],	
    "name": "aaveProtocolDataProvider",	
    "outputs": [	
      {	
        "internalType": "contract IProtocolDataProvider",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "name": "communityTeasuries",	
    "outputs": [	
      {	
        "internalType": "address",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      },	
      {	
        "internalType": "uint256",	
        "name": "_amount",	
        "type": "uint256"	
      },	
      {	
        "internalType": "address",	
        "name": "_deligatee",	
        "type": "address"	
      }	
    ],	
    "name": "delegate",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "string",	
        "name": "_currency",	
        "type": "string"	
      },	
      {	
        "internalType": "uint256",	
        "name": "_amount",	
        "type": "uint256"	
      }	
    ],	
    "name": "deposit",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "string",	
        "name": "",	
        "type": "string"	
      }	
    ],	
    "name": "depositableCurrenciesContracts",	
    "outputs": [	
      {	
        "internalType": "address",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "name": "depositors",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      },	
      {	
        "internalType": "address",	
        "name": "_member",	
        "type": "address"	
      }	
    ],	
    "name": "getBalance",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      },	
      {	
        "internalType": "uint256",	
        "name": "_id",	
        "type": "uint256"	
      }	
    ],	
    "name": "getDeligatee",	
    "outputs": [	
      {	
        "internalType": "address",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      },	
      {	
        "internalType": "address",	
        "name": "_deligatee",	
        "type": "address"	
      }	
    ],	
    "name": "getDeligateeBorrowedAmount",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      }	
    ],	
    "name": "getDeligateeCount",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      }	
    ],	
    "name": "getTreasuryBalance",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      }	
    ],	
    "name": "getTreasuryBorrowedBalance",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "name": "isTreasuryActive",	
    "outputs": [	
      {	
        "internalType": "bool",	
        "name": "",	
        "type": "bool"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_treasuryAddress",	
        "type": "address"	
      }	
    ],	
    "name": "linkCommunity",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [],	
    "name": "nextId",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [],	
    "name": "owner",	
    "outputs": [	
      {	
        "internalType": "address",	
        "name": "",	
        "type": "address"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [],	
    "name": "renounceOwnership",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [],	
    "name": "template",	
    "outputs": [	
      {	
        "internalType": "enum DataTypes.CommunityTemplate",	
        "name": "",	
        "type": "uint8"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "uint256",	
        "name": "_id",	
        "type": "uint256"	
      }	
    ],	
    "name": "thresholdReached",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [],	
    "name": "totalDeposited",	
    "outputs": [	
      {	
        "internalType": "uint256",	
        "name": "",	
        "type": "uint256"	
      }	
    ],	
    "stateMutability": "view",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "newOwner",	
        "type": "address"	
      }	
    ],	
    "name": "transferOwnership",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      },	
      {	
        "internalType": "address",	
        "name": "_deligatee",	
        "type": "address"	
      },	
      {	
        "internalType": "bool",	
        "name": "_force",	
        "type": "bool"	
      }	
    ],	
    "name": "undelegate",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  },	
  {	
    "inputs": [	
      {	
        "internalType": "address",	
        "name": "_currency",	
        "type": "address"	
      },	
      {	
        "internalType": "uint256",	
        "name": "_amount",	
        "type": "uint256"	
      }	
    ],	
    "name": "withdraw",	
    "outputs": [],	
    "stateMutability": "nonpayable",	
    "type": "function"	
  }	
]


// ${process.env.REACT_APP_INFURA_API_KEY}

// const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/b6611b1efc64497fa183f7dd59608581`,'kovan')
// const signer = provider.getSigner() 
// const TreasuryDAO = new ethers.Contract('0x890813fc77EEA0D3830870EA2FE0CeF8462EB4Ad', abi, signer);

const contractAdress ="0x890813fc77EEA0D3830870EA2FE0CeF8462EB4Ad"

export const storeGigHash = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();


  // TODO: Create contract should join the user automatically instead of needing to call join after that.
  // call the smart contract to create community
  const contract = new ethers.Contract(
    contractAdress,
    abi,
    signer,
  );


  console.log('starting wallet connect')

  const createTx = await contract.deposit("DAI", 5000);
  
  console.log('after deposit ')

  console.log(createTx)
  // Wait for transaction to finish
  const gigTransactionResult = await createTx.wait();

  console.log('gigtransaction: ', gigTransactionResult)
  const { events } = gigTransactionResult;

  console.log(events);
  const gigCreatedEvent = events.find(
    e => e.event === 'Deposited',
  );

  if (!gigCreatedEvent) {
    throw new Error('Something went wrong');
  } else {
    console.log('this failed')
  }
};






const Card = (props) => {
 
  const handleClick = (e) => {
    e.preventDefault()
    alert(`category number (name): ${props.category}`)
  }

  return (
  <div className="black-card" onClick={handleClick}>
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


const ContractInteraction = () => {

    return (
      <>


      <Formik
            initialValues={ {tokenAmount: 0, repaymentPercent: 0, totalReturn: 0, currency: 'DAI'} }
            validate={values => {
              const errors = {};
              if (!values.tokenAmount) {
              errors.tokenAmount = 'Required';
              } else if (values.tokenAmount <= 0) {
                errors.tokenAmount = 'Provide a valid amount.';
              }
              return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);

                // send tx to TreasuryDAO contract here. 
                // https://docs.ethers.io/v4/api-contract.html
                // need to initialize signedWallet before calling non-read-only functions?
                storeGigHash();
             }}

          >
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
                  
                  <button type="submit" disabled={isSubmitting} class="submit-button">
                    Delegate & Support!
                  </button>
                </div>
              </div>
            </>
            

        
  
            </Form>
          )}
          </Formik>
    
 
      </>
    )

}



const DelegationPage = () => {

  return (
    <Page layout="base">
      <Section slot="row1-col1">
        <Card title={<>Blockchain & <br/> Open Source</>} description={"Develop cool stuff"} category="blockchain"/>
      </Section>
      <Section slot="row1-col2">
        <Card title={<>Arts, Events <br/> & Lifestyle</>} description={"Live a cool life"} category="arts"/>
      </Section>
      <Section slot="row1-col3">
        <Card title={<>Local <br/> Communities</>} description={"Live locally."} category="local"/>
      </Section>

      <Section slot="row2-col1">
        <ContractInteraction />
      </Section>
    </Page>
  )
}




export default DelegationPage;


