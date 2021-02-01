import React, { useReducer, useState } from "react";
import { DatePicker } from "antd"

import 'antd/dist/antd.css';
import "../css/DelegationPage.css"
import '../css/BaseLayout.css'

import { Grid, Label, Input, Form, Checkbox } from "semantic-ui-react"
import { Slider } from "react-semantic-ui-range";
import { Page, Section } from 'react-page-layout';

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

  return <div class="x01b-delegation-agreement dove-gray-border-1px">
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
          <Input class="overlap-group1">
          </Input>
          <div class="group-1330">
            <img
              class="icon-ionic--button-on"
              src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/icon-ionic-md-radio-button-on-2@1x.png"
            />
            <div class="dai raleway-bold-black-14px">DAI</div>
            <img
              class="icon-ionic--button-on-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/icon-ionic-md-radio-button-on-1@1x.png"
            />
            <div class="usdc raleway-bold-black-14px">USDC</div>
          </div>
        </div>
        <div class="auto-flex2">
          <div class="repayment-structure raleway-semi-bold-black-18px">Repayment Structure</div>
          <p class="text-1 raleway-normal-black-14px">
            Decide whether you want it to be a full donation, or receive back part of your funds.
        </p>
          <div class="group-1324">
            <div class="rectangle-621"></div>
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
    </div>
    <div class="overlap-group2">
      <div class="delegate-support epilogue-bold-white-22px">
        <span class="span0">Delegate &amp; Support</span><span class="span1-movYKW">!</span>
      </div>
    </div>
    <div class="bg-1 green-blue-border-2px"></div>
  </div>
}



const DelegationPage = () => {

  const initialState = { tokenAmount: 0, repaymentPercent: 0, totalReturn: 0, currency: 'DAI' }
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
        return { ...state, currency: action.data}
      }
      default: {
        throw new Error("Error mann!")
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)



  const Repayment = () => {

    const settings = {
      start: 0,
      min: 0,
      max: 50,
      step: 1,
      onChange: value => {
        dispatch({ type: 'updateRepaymentPercent', data: value })
      }
    };


    return (
      <>
        <Grid columns={2}>
          <Grid.Column width={12}>
            <Slider value={state.repaymentPercent} color="black" settings={settings}></Slider>
          </Grid.Column>
          <Grid.Column width={4}>
            <Label>{`${state.repaymentPercent} %`}</Label>
          </Grid.Column>
        </Grid>
      </>
    )
  }

  const Amount = () => {

    //const [amount, setAmount] = useState(0)

    const amountOnChange = (e) => {
      e.preventDefault()
      const value = Number(e.target.value)
      //setAmount(value)
      dispatch({ type: 'updateAmount', data: value })
      console.log(state.repaymentPercent)
      // components start lagging immediately when uncommenting the line above...
    }

    return <input
      name="amount"
      type="number"
      value={""}
      placeholder="5000"
      onChange={e => amountOnChange(e)}
    />

    /*
            <Form>
            <Form.Field>
              <Checkbox
                radio
                label='DAI'
                name='checkboxRadioGroup'
                value={'DAI'}
                checked={state.currency === 'DAI'}
                onChange={currencyOnChange}
              />
              <Checkbox
                radio
                label='USDC'
                name='checkboxRadioGroup'
                value='USDC'
                checked={state.currency === 'USDC'}
                onChange={currencyOnChange}
              />
            </Form.Field>
          </Form>
    */
  }

  const Currency = () => {

    const currencyOnChange = (e) => {
      e.preventDefault()

      if (state.currency === "DAI") {
        dispatch({ type: 'updateCurrency', data: 'USDC' })
      }

      if (state.currency === "USDC") {
        dispatch({ type: 'updateCurrency', data: 'DAI' })
      }

    }
    return (
      <>
        <Label> DAI
        <input type="radio" name="DAI"
            value="DAI"
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
      </>
    )
  }

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