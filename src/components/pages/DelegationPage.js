import React, { Component, useReducer, useState } from "react";
import { DatePicker } from "antd"

import 'antd/dist/antd.css';
import "../css/DelegationPage.css"
import '../css/BaseLayout.css'

import { Grid, Label, Input, Form, Checkbox } from "semantic-ui-react"
import { Slider } from "react-semantic-ui-range";
import { Page, Section } from 'react-page-layout';
import { ethers } from 'ethers'


// <Input placeholder="Enter Value" onChange={handleValueChange} />
const Card = () => (
  <div className="black-card">
    <div className="auto-flex">
      <img className="image-7" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png" />
      <div className="title raleway-bold-alto-22px">
        Blockchain &<br />Open-Source</div>
    </div>
    <div className="description raleway-normal-alto-18px">"Description of this area of Public Goods."</div>
    <img className="line-26" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png" />
    <div className="articles raleway-normal-alto-13px">
      xx Active Projects
    </div>
  </div>
)


const ContractInteraction = () => {
  const initialState = {
    tokenAmount: 0,
    repaymentPercent: 0,
    totalReturn: 0,
    currency: 'DAI'
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateAmount': {
        return { ...state, tokenAmount: action.data }
      }
      case 'updateRepaymentPercent': {
        return { ...state, repaymentPercent: action.data }
      }
      case 'updateTotalReturn': {
        return { ...state, totalReturn: action.data }
      }
      case 'updateCurrency': {
        return { ...state, currency: action.data }
      }
      default: {
        throw new Error("Error mann!")
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const settings = {
    start: 0,
    min: 0,
    max: 50,
    step: 1,
    onChange: value => {
      dispatch({ type: 'updateRepaymentPercent', data: value })
    }
  };

  const amountOnChange = (e) => {
    e.preventDefault()
    const value = parseInt(e.target.value)
    dispatch({ type: 'updateAmount', data: value })
  }

  const currencyOnChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    dispatch({ type: 'updateCurrency', data: value })
    console.log('target',e.target);
    console.log('currentTarget',e.currentTarget);
  }

  return (
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
            <input className="overlap-group1"
              name="amount"
              type="number"
              value={0}
              placeholder="5000"
              onChange={e => amountOnChange(e)}
            />
            <div class="group-1330">
              <Label> DAI
                <input type="radio" name="DAI"
                  value={"DAI"}
                  checked={state.currency === "DAI"}
                  onChange={e => currencyOnChange(e)}
                />
              </Label>

              <Label> USDC
                <input type="radio" name="USDC"
                  value={"USDC"}
                  checked={state.currency === "USDC"}
                  onChange={e => currencyOnChange(e)}
                />
              </Label>
            </div>
          </div>
          <div class="auto-flex2">
            <div class="repayment-structure raleway-semi-bold-black-18px">Repayment Structure</div>
            <p class="text-1 raleway-normal-black-14px">
              Decide whether you want it to be a full donation, or receive back part of your funds.
          </p>
            <div class="group-1324">
              <Grid columns={2}>
                <Grid.Column width={12}>
                  <Slider value={state.repaymentPercent} color="black" settings={settings}>
                  </Slider>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Label>{`${state.repaymentPercent} %`}</Label>
                </Grid.Column>
              </Grid>
              <div class="text-3 raleway-bold-black-14px">20%</div>
            </div>
            <div class="auto-flex1">
              <div class="number-1 raleway-bold-black-14px">0</div>
              <div class="number-2 raleway-bold-black-14px">50</div>
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
            <div class="price raleway-bold-black-14px">1000 USD</div>
          </div>
        </div>
      <div class="overlap-group2">
        <div class="delegate-support epilogue-bold-white-22px">
          <span class="span0">Delegate &amp; Support</span><span class="span1-movYKW">!</span>
        </div>
      </div>
      <div class="bg-1 green-blue-border-2px"></div>
      </div>
    </div>
  )
}



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

const provider = new ethers.providers.InfuraProvider('kovan')
// const provider = new InfuraProvider('kovan')
const TreasuryDAO = new ethers.Contract('0x890813fc77EEA0D3830870EA2FE0CeF8462EB4Ad', abi, provider);
console.log(TreasuryDAO)



const DelegationPage = () => {







  return (
    <Page layout="base">
      <Section slot="row1-col1">
        <Card />
      </Section>
      <Section slot="row1-col2">
        <Card />
      </Section>
      <Section slot="row1-col3">
        <Card />
      </Section>

      <Section slot="row2-col1">
        <ContractInteraction />
      </Section>
    </Page>
  )
}






export default DelegationPage;
