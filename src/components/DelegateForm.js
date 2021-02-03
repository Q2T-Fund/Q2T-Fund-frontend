import React, { Component, useReducer, useState } from "react";

import { Grid, Label, Input, Form, Checkbox } from "semantic-ui-react"
import { Slider } from "react-semantic-ui-range";
import { ethers } from 'ethers'

require('dotenv').config()

const { abi } = require('../json/abi/TreasuryDAO.abi.json')
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`,'kovan')
const signer = provider.getSigner()
const TreasuryDAO = new ethers.Contract('0x890813fc77EEA0D3830870EA2FE0CeF8462EB4Ad', abi, signer);

const initialState = {
  tokenAmount: 0,
  repaymentPercent: 0,
  totalReturn: 0,
  dai: false,
  usdc: true,
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
    case 'setDai': {
      return { ...state, dai: true, usdc: false }
    }
    case 'setUSDC': {
      return { ...state, dai: false, usdc: true }
    }
    default: {
      throw new Error("Error mann!")
    }
  }
}

export default function DelegateForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const currency = state.dai ? "DAI" : "USDC"
    const { amount } = state
    TreasuryDAO.deposit(currency, amount)
  }

  return (
    <div className="x01b-delegation-agreement dove-gray-border-1px">
      <div className="title raleway-bold-black-22px">Your Delegation Agreement</div>
      <div className="overlap-group">
        <img
          className="path-1491"
          src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491@1x.png"
        />
        <p className="by-delegating-the-tr raleway-normal-black-14px-2">
          <span className="span">By delegating the Treasury, you can fund and support projects for the Public Goods. The Quadratic Treasury will
          be “locking” these funds to provide “</span>
          <span className="span1-DQxoii">non-repayable loans</span>
          <span className="span">” to these projects using Quadratic Funding and a milestone-based approach to prevent any form of fraud and
          collusion.</span>
        </p>
      </div>
      <div className="auto-flex6">
        <div className="auto-flex3">
          <div className="auto-flex">
            <div className="amount raleway-semi-bold-black-18px">Amount</div>
            <input className="overlap-group1"
              name="amount"
              type="number"
              value={state.tokenAmount}
              placeholder="5000"
              onChange={(e) => amountOnChange(e)}
            />
            <div className="group-1330">
              <form onSubmit={handleSubmit}>
                <Label> DAI
                <input type="radio"
                  name="DAI"
                  value={state.dai}
                  checked={state.dai}
                  onChange={() => dispatch({ type: 'setDai' })}
                />
                </Label>

                <Label> USDC
                <input type="radio"
                  name="USDC"
                  value={state.usdc}
                  checked={state.usdc}
                  onChange={() => dispatch({ type: 'setUSDC' })}
                />
                </Label>
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
          <div className="auto-flex2">
            <div className="repayment-structure raleway-semi-bold-black-18px">Repayment Structure
            </div>
            <p className="text-1 raleway-normal-black-14px">
              Decide whether you want it to be a full donation, or receive back part of your funds.
            </p>
            <div className="group-1324">
              <Grid columns={2}>
                <Grid.Column width={12}>
                  <Slider value={state.repaymentPercent} color="black" settings={settings}>
                  </Slider>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Label>{`${state.repaymentPercent} %`}</Label>
                </Grid.Column>
              </Grid>
              <div className="text-3 raleway-bold-black-14px">20%</div>
            </div>
            <div className="auto-flex1">
              <div className="number-1 raleway-bold-black-14px">0</div>
              <div className="number-2 raleway-bold-black-14px">50</div>
            </div>
          </div>
        </div>
        <div className="auto-flex5">
          <div className="your-return raleway-semi-bold-black-18px">Your Return</div>
          <p className="text-2 raleway-normal-black-14px">
            This is how much you will receive back from your funds. Plus interest!
          </p>
          <div className="auto-flex4">
            <div className="rectangle-621-1"></div>
            <div className="price raleway-bold-black-14px">1000 USD</div>
          </div>
        </div>
        <div className="overlap-group2">
          <div className="delegate-support epilogue-bold-white-22px">
            <span className="span0">Delegate &amp; Support
            </span>
            <span className="span1-movYKW">!</span>
          </div>
        </div>
        <div className="bg-1 green-blue-border-2px"></div>
      </div>
    </div>
  )
}