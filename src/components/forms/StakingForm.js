import React, { Component, useReducer, useState } from "react";

import { ethers } from 'ethers'
import { Form, Input, Slider, Radio } from 'formik-antd'
import { Formik } from 'formik'

require('dotenv').config()

const { abi } = require('../json/abi/TreasuryDAO.abi.json')
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`, 'kovan')
const signer = provider.getSigner()
const TreasuryDAO = new ethers.Contract('0x890813fc77EEA0D3830870EA2FE0CeF8462EB4Ad', abi, signer);

export default function StakingForm() {
 return (
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
    onSubmit={testCall}>{
      ({
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
            <div class="x01b-delegation-agreement dove-gray-border-1px">
              <div class="title raleway-bold-black-22px">Your Delegation Agreement</div>
              <div class="overlap-group">
                <img
                  class="path-1491"
                  src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491@1x.png"
                />
                <p class="by-delegating-the-tr raleway-normal-black-14px-2">
                  <span class="span">
                    By delegating the Treasury, you can fund and support projects for the Public Goods. The Quadratic Treasury will be “locking” these funds to provide “
              </span><span class="span1-DQxoii">non-repayable loans</span>
                  <span class="span">
                    ” to these projects using Quadratic Funding and a milestone-based approach to prevent any form of fraud and
                    collusion.
              </span>
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
                    {<div>{errors.tokenAmount}</div>}

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

                <button
                  onClick={() => storeGigHash(values.currency, values.tokenAmount)}>
                  Delegate & Support!
          </button>
              </div>
            </div>
          </Form>
        )
    }</Formik>
  )
}
