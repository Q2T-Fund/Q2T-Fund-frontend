import React from 'react';
import "./css/DelegationPage.css";
import "./css/BaseLayout.css";
import { Form, Input, Slider, Radio } from "formik-antd";
import { Formik } from "formik";
import { approveDai } from "../api/contracts";
import { depositTx, getTemplate } from '../api/contracts';
import lineBreak from "../assets/delegate-form-line-break.png";

const DelegateForm = (props) => {
    const templateId = getTemplate(props.template);

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
            // const isKovan = await validateKovanNet();
            // if (!isKovan) {
            //   openNotification(
            //     "Transaction Failed!",
            //     `Please switch to Kovan network before proceeding.`,
            //     false
            //   );
            //   return;
            // }
            await approveDai('0x2fB257d500E4C4a86B0fbC4F61027ececeae11ef', values.tokenAmount);
            await depositTx(
              templateId,
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
                <div className="delegation-form dove-gray-border-1px">
                  <div className="title raleway raleway-bold-black-22px">
                    Your Delegation Agreement
                  </div>
                  <div className="overlap-group">
                    <img
                      className="linebreak"
                      src={lineBreak}
                      alt="linebreak"
                    />
                    <p className="treasury-delegate raleway raleway-normal-black-14px-2">
                      <span className="span1-delegate">
                        By delegating the Treasury, you can fund and support
                        projects for the Public Goods. The Quadratic Treasury will
                        be “locking” these funds to provide “
                      </span>
                      <span className="span2-delegate">non-repayable loans</span>
                      <span className="span1-delegate">
                        ” to these projects using Quadratic Funding and a
                        milestone-based approach to prevent any form of fraud and
                        collusion.
                      </span>
                    </p>
                  </div>
                  <div className="auto-flex6">
                    <div className="auto-flex">
                      <div className="amount-delegate raleway raleway-semi-bold-black-18px">
                        Amount
                      </div>
  
                      <Input
                        type="number"
                        name="tokenAmount"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tokenAmount}
                        placeholder="5000"
                        className="overlap-group1-delegate"
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
                      <div className="repayment-structure raleway raleway-semi-bold-black-18px">
                        Repayment Structure
                      </div>
                      <p className="text-1 raleway raleway-normal-black-14px">
                        Decide whether you want it to be a full donation, or
                        receive back part of your funds.
                      </p>
  
                      <div className="auto-flex1">
                        <div className="number-1 raleway raleway-bold-black-14px">0</div>
  
                        <Slider
                          name="repaymentPercent"
                          min={0}
                          max={50}
                          color="black"
                          onBlur={handleBlur}
                          value={values.repaymentPercent}
                          className="repayment-percent-bar"
                        />
  
                        <div className="number-2 raleway raleway-bold-black-14px">50</div>
                      </div>
  
                      <div className="repayment-percent-number raleway raleway-normal-black-14px">
                        {`${values.repaymentPercent} % Repayment Percent`}
                      </div>
                    </div>
                    <div className="auto-flex">
                      <div className="your-return raleway raleway-semi-bold-black-18px">
                        Your Return
                      </div>
                      <p className="text-2 raleway raleway-normal-black-14px">
                        This is how much you will receive back from your funds.
                        Plus interest!
                      </p>
                      <div>
                        <div className="rectangle-621-1"></div>
                        <div className="price-delegate raleway raleway-bold-black-14px">{`${(
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
}

export default DelegateForm;