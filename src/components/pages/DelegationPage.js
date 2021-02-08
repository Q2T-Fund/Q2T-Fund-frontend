import React, { useState } from "react";
import { Page, Section } from "react-page-layout";
import { Form, Input, Slider, Radio } from "formik-antd";
import { Formik } from "formik";
import { approveDai } from "../../api/contracts";
import { openNotification } from "../utils/common";
import { validateKovanNet, depositTx, getTreasuryDAOAddress } from '../../api/contracts';

import "antd/dist/antd.css";
import "../css/DelegationPage.css";
import "../css/BaseLayout.css";

require("dotenv").config();


const ContractInteraction = (props) => {
  console.log(props.template);
  return (
    <>
      <Formik
        initialValues={{
          tokenAmount: 0,
          repaymentPercent: 0,
          totalReturn: 0,
          currency: "DAI",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.tokenAmount) {
            errors.tokenAmount = "Required";
          } else if (values.tokenAmount <= 0) {
            errors.tokenAmount = "Provide a valid amount.";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const isKovan = await validateKovanNet();
          if (!isKovan) {
            openNotification(
              "Transaction Failed!",
              `Please switch to Kovan network before proceeding.`,
              false
            );
            return;
          }
          const address = getTreasuryDAOAddress(props.template)
          await approveDai(address, values.tokenAmount);
          await depositTx(
            address,
            values.currency,
            values.tokenAmount,
            values.repaymentPercent
          );
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
              <div className="x01b-delegation-agreement dove-gray-border-1px">
                <div className="title raleway-bold-black-22px">
                  Your Delegation Agreement
                </div>
                <div className="overlap-group">
                  <img
                    className="path-1491"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491@1x.png"
                  />
                  <p className="by-delegating-the-tr raleway-normal-black-14px-2">
                    <span className="span">
                      By delegating the Treasury, you can fund and support
                      projects for the Public Goods. The Quadratic Treasury will
                      be “locking” these funds to provide “
                    </span>
                    <span className="span1-DQxoii">non-repayable loans</span>
                    <span className="span">
                      ” to these projects using Quadratic Funding and a
                      milestone-based approach to prevent any form of fraud and
                      collusion.
                    </span>
                  </p>
                </div>
                <div className="auto-flex6">
                  <div className="auto-flex">
                    <div className="amount raleway-semi-bold-black-18px">
                      Amount
                    </div>

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

                    <div className="group-1330">
                      <Radio.Group
                        name="currency"
                        onBlur={handleBlur}
                        value={values.currency}
                      >
                        <Radio value={"DAI"}>DAI</Radio>
                        <Radio value={"USDC"}>USDC</Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="auto-flex">
                    <div className="repayment-structure raleway-semi-bold-black-18px">
                      Repayment Structure
                    </div>
                    <p className="text-1 raleway-normal-black-14px">
                      Decide whether you want it to be a full donation, or
                      receive back part of your funds.
                    </p>

                    <div className="auto-flex1">
                      <div className="number-1 raleway-bold-black-14px">0</div>

                      <Slider
                        name="repaymentPercent"
                        min={0}
                        max={50}
                        color="black"
                        onBlur={handleBlur}
                        value={values.repaymentPercent}
                        className="repayment-percent-bar"
                      />

                      <div className="number-2 raleway-bold-black-14px">50</div>
                    </div>

                    <div className="repayment-percent-number raleway-normal-black-14px">
                      {`${values.repaymentPercent} % Repayment Percent`}
                    </div>
                  </div>
                  <div className="auto-flex">
                    <div className="your-return raleway-semi-bold-black-18px">
                      Your Return
                    </div>
                    <p className="text-2 raleway-normal-black-14px">
                      This is how much you will receive back from your funds.
                      Plus interest!
                    </p>
                    <div className="auto-flex4">
                      <div className="rectangle-621-1"></div>
                      <div className="price raleway-bold-black-14px">{`${(
                        (values.repaymentPercent / 100) *
                        values.tokenAmount
                      ).toFixed(0)} USD`}</div>
                    </div>
                  </div>
                </div>
                <div className="submit-button-container">
                  <button type="submit" className="submit-button">
                    Delegate & Support!
                  </button>
                </div>
              </div>

              <div className="message-container">
                <div className="success-font">{null}</div>
              </div>
            </>
          </Form>
        )}
      </Formik>
    </>
  );
};

const Card = (props) => {
  return (
    <div className={props.type} onClick={props.onClick}>
      <div className="top-card">
        <img
          className="image-7"
          src={ props.type === 'black-card' 
          ? "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png"
          : '/unknown.png'
  }
        />
        <div className={props.type === 'black-card' ? "title raleway-bold-alto-22px" : "title-white-card raleway-bold-alto-22px"}>
          {props.title}
        </div>
      </div>
      <div className={props.type === 'black-card' ? "description raleway-normal-alto-18px" : "description-white-card raleway-normal-alto-18px"}>
        {props.description}
      </div>
      <img
        className="line-26"
        src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png"
      />
      <div className={props.type === 'black-card' ? "articles raleway-normal-alto-13px" : "articles-white-card raleway-normal-alto-13px"}>
        {props.activeProjects} Active Projects
      </div>
    </div>
  );
};


const DelegationPage = () => {
  const [template, setTemplate] = useState('open-source');

  return (
    <Page layout="base" className="top-cards">
      <Section slot="header">
        <div className="top-header">
          <h1 className="main-title">Support the Public Goods!</h1>
          <h4 className="subtitle">
            Choose the area and the type of Project you want to fund.
          </h4>
        </div>
      </Section>
      <Section slot="row1-col1">
        <Card
          type={template === 'open-source' ? 'white-card' : 'black-card'}
          title={
            <>
              Blockchain & <br /> Open Source
            </>
          }
          description="Help researchers and small, functional web3 teams to bring innovation and support the open-source movement for a more sustainable, collaborative world."
          category="blockchain"
          activeProjects={2}
          onClick={() => setTemplate('open-source')}
        />
      </Section>
      <Section slot="row1-col2">
        <Card
          type={template === 'art' ? 'white-card' : 'black-card'}
          title={
            <>
              Arts, Events <br /> & Lifestyle
            </>
          }
          description="Art groups, writers, and live events in all of their variety. From entertainment, to music performances - Art is the purest form of human connection."
          category="arts"
          activeProjects="xx"
          onClick={() => setTemplate('art')}
        />
      </Section>
      <Section slot="row1-col3">
        <Card
          type={template === 'local' ? 'white-card' : 'black-card'}
          title={
            <>
              Local <br /> Communities
            </>
          }
          description="Local Projects bring support to people in need - from impoverished areas, to innovative local hubs where locals can get together and create something greater than oneself."
          category="local"
          activeProjects="xx"
          onClick={() => setTemplate('local')}
        />
      </Section>

      <Section slot="row2-col1">
        <ContractInteraction template={template} />
      </Section>
    </Page>
  );
};

export default DelegationPage;
