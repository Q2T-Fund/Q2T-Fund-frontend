import React, {useState } from "react"

import { ethers } from 'ethers'
import { Form, Input, Radio } from 'formik-antd'
import { Formik } from 'formik'

import 'antd/dist/antd.css';
import "../css/StakePage.css"

import { VerticalSidebar } from "../layouts/BaseLayout"

import {
  Sidebar,
} from 'semantic-ui-react'

const StakePage = () =>  {

  const [state, setState] = useState({
    animation: 'push',
    direction: 'left',
    dimmed: false,
    visible: true,
  })

  return (

    <Sidebar.Pushable>
    <VerticalSidebar
      animation={state.animation}
      direction={state.direction}
      visible={state.visible}
    />

    <Sidebar.Pusher dimmed={state.dimmed && state.visible}>

      <Stake />

    </Sidebar.Pusher>
  </Sidebar.Pushable>

      
  
  );
  
  
  

}

export default StakePage


const Stake = () => {

  return (
    <>
    <Formik
    initialValues={{
      tokenAmount: 0,
      currency: "DAI",
      totalReturn: 0,
      communityAPY: 24
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
    onSubmit={values => console.log(values)}
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
    )
    <div className="x02-stake">
      <div className="overlap-group">
        <div className="rectangle-19"></div>
        <div className="rectangle-1751 dove-gray-border-1px"></div>
        <div className="rectangle-1752 border-class-1"></div>
        <div className="text-1 raleway-medium-black-24px">{"Delegate funds to your Treasury to accrue returns for new projects!"}</div>
        <h1 className="text-2 raleway-bold-black-30px">{"Stake in your Community Treasury"}</h1>


       {/* community card */}

       <div className="number raleway-bold-slimy-green-20px">{"scarcity score"}</div>
        

       
        <div className="members raleway-bold-black-16px">{"Members"}</div>
        <div className="open-projects raleway-bold-black-16px">{"Open Projects"}</div>
        <div className="liquidity-pool raleway-bold-black-16px">{"Liquidity Pool"}</div>
        <div className="scarcity-score raleway-bold-black-16px">{"Scarcity Score"}</div>


        {/* Open Projects, members, LiquidityPool! */}

        <div className={`group-1273 border-class-2 `}>
           <div className="number-1 raleway-bold-black-16px">{`here goes members!`}</div>
        </div>


        <div className="group-1328 border-class-2">
          <div className="number-2 raleway-bold-black-16px">{`here goes open projects!`}</div>
        </div>


        <div className={`group-1273 border-class-2 group-1329`}>
          <div className="number-1 raleway-bold-black-16px">{"300 thousand!"}</div>
         </div>

      {/* Open Projects, members, LiquidityPool! */}



      {/* Treasury Link */}

        <div className="check-on-etherscan raleway-semi-bold-dove-gray-12px">
          <span className="span0-x09oUk">{"Check on "}</span>


          <a className="span1-x09oUk" href="https://www.google.com">{"Etherscan"}</a>
        </div>

        {/* community card */}


        <div className="currency raleway-semi-bold-black-18px">{"Currency"}</div>




        <div className="amount raleway-semi-bold-black-18px">{"Amount"}</div>
        <div className="your-return raleway-semi-bold-black-18px">{"Your Return"}</div>
        
        
        
        <div className="community-apy raleway-semi-bold-black-18px">{"Community APY"}</div>
        <div className="progress-bar-2 border-class-1">
          <div className="rectangle-621"></div>
        </div>
        <img className="path-1491" src="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491-1@1x.png" />
        <div className="bg border-class-1"></div>



        <p className="text-3 raleway-normal-black-14px">{"The amount of tokens you stake for your community."}</p>
        <p className="text-4 raleway-normal-black-14px">{"“Staking” is different from “Donating” - basically your Treasury is “locking” these funds to provide liquidity. In exchange, you all get a higher interest return!"}</p>
        <p className="text-5 raleway-normal-black-14px">{"It’s based on the size of your staking,"}</p>
        <p className="text-55 raleway-normal-black-14px">{"and the amount of DiTo you own!"}</p>
        <p className="text-6">{"Your initial investment plus: "}</p>
        <div className="group-1324">
          <div className="overlap-group2">
            <div className="progress-bar-2-1 border-class-1">
              <div className="rectangle-621-1"></div>
            </div>


            {/* communityAPY goes here */}

            <div className="text-7 raleway-bold-black-14px">{`${values.communityAPY} %`}</div>
          
                  
        <div className="submit-button">
          <button type="submit">Stake!</button>
        </div>
          
          </div>
        </div>



      
        <div className="dai">
        <Radio.Group name="currency" onBlur={handleBlur} value={values.currency}>
                      <Radio value={"DAI"}>DAI</Radio>
                      <Radio value={"USDC"}>USDC</Radio>
        </Radio.Group>
        </div>

        {/* {/* <div className="number-3">{number3}</div> */}
        <div className="price raleway-bold-black-14px">{`${values.tokenAmount * 0.5} USD`}</div>
        
        
        {/* <div className="dai raleway-bold-black-14px">{}</div> */}
        {/* <div className="usdc raleway-bold-black-14px">{usdc}</div> */}
        {/* <div className="dai-1 raleway-bold-black-14px">{dai2}</div> */} */}
        <p className="text-8 raleway-normal-black-14px"><>Stablecoins are non-volatile cryptocurrencies. They are “pegged” to Fiat (USD), so to remain stable:<br/>1 DAI  = 1 US Dollar<br/>1 USDC = 1 US Dollar</></p>
        {/* <img className="icon-ionic--button-on" src={iconIonicMdRadioButtonOn} />
        <img className="icon-ionic--button-on-1" src={iconIonicMdRadioButtonOn2} />
        <div className="bg-1"></div>
        <div className="bg-2"></div> */}

      
        <Input
        type="number"
        name="tokenAmount"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.tokenAmount}
        className="input"
        />



      <div className="checkup-card">{"Checkup Card"}</div>

        <div className="community-name">{"Community Name here!"}</div>
      </div>

    </div>
    </Form>
    )}
    </Formik>
    </>
  );
}

