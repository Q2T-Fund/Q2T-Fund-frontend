import React, { useState } from "react"
import { Form, Input, Radio } from 'formik-antd'
import { Formik } from 'formik'
import { approveDai, fund, validateKovanNet } from '../api/contracts';
import 'antd/dist/antd.css';
import "./css/StakePage.css"
import { openNotification } from "./utils/common-functions";
import { VerticalSidebar } from "./layouts/BaseLayout";
import {
  Sidebar,
} from 'semantic-ui-react';

const communityTreasuryAddress = '0x3CFCae3fe95f555783E13DF1ce6697602608f66D';

const StakePage = () => {

    const [state] = useState({
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
  
    // const [user, setUser] = useState(undefined);
    const [community] = useState({
      openGigs: 0,
      members: 0
    });
  
    //////////
    // Commented out the below to avoid console error from breaking the app -->
  
    // useEffect(() => {
  
    //   async function fetchData() {
    //     const skillWallet = JSON.parse(localStorage.getItem('skillWallet'));
    //     const c = await fetchCommunity(skillWallet.communityID);
    //     // const [u, c] = await Promise.all([fetchUser(), fetchCommunity(skillWallet.communityID)])
    //     setCommunity(c);
    //     // setUser(u)
    //   }
    //   fetchData();
    // }, []);
  
    const submitStake = async (values) => {
      console.log('submitStake')
      const isKovan = await validateKovanNet();
      if (!isKovan) {
        openNotification(
          "Transaction Failed!",
          `Please switch to Kovan network before proceeding.`,
          false
        );
        return;
      }
      await approveDai(communityTreasuryAddress, values.tokenAmount);
      await fund(communityTreasuryAddress, values.currency, values.tokenAmount);
    }
    
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
        onSubmit={async (values, { setSubmitting }) => {
          await submitStake(values)
        }} >
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
          <Form onSubmit={handleSubmit}> )
        <div className="stake-background-container">
            <h1 className="h1" >Stake in your Community Treasury</h1>
            <h2 className="h2">Delegate funds to your Treasury to accrue returns for new projects!</h2>
            
            <div className="form-and-card-container">
                <div className="stake-form-container">
                    <div>

                        <div className="form-subsection currency">
                            <h3 className="h3">Currency</h3>

                            <div className="dai">
                                <Radio.Group name="currency" onBlur={handleBlur} value={values.currency}>
                                    <Radio value={"DAI"}>DAI</Radio>
                                    <Radio value={"USDC"}>USDC</Radio>
                                </Radio.Group>
                            </div>

                            <p className="left-column-text p"><>Stablecoins are non-volatile cryptocurrencies. They are “pegged” to Fiat (USD), so to remain stable:<br />1 DAI  = 1 US Dollar<br />1 USDC = 1 US Dollar</></p>
                        </div>

                        <div className="form-subsection amount-stake">
                            <h3 className="h3">Amount</h3>
                            <Input
                                type="number"
                                name="tokenAmount"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tokenAmount}
                                className="input2"
                            /> 
                            <p className="left-column-text p">The amount of tokens you stake for your community.</p>
                        </div>
                    </div>

                    <div>
                        <div className="form-subsection community-apy">
                            <h3 className="h3">Commmunity APY</h3>

                            <div className="group-1324">
                                <div className="overlap">
                                    <div className="progress-bar border-class-1">
                                        <div className="filled-progress">
                                        <div className="text-7 raleway-bold-black-14px-stake">{`${values.communityAPY} %`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-4 raleway-normal-black-14px p">“Staking” is different from “Donating” - basically your Treasury is “locking” these funds to provide liquidity. In exchange, you all get a higher interest return!</p>


                        </div>
                        
                        <div className="form-subsection return">
                            <h3 className="h3">Your Return</h3>
                            <p className="initial-investment-text p">Your initial investment plus: </p>

                            <div className="group-1324">
                                <div className="overlap">
                                    <div className="progress-bar border-class-1">
                                        <div className="filled-progress">
                                            <p className="price-stake">{`${values.tokenAmount * 0.5} USD`}</p>
                                        </div>
                                    </div>

                                

                                    <p className="p">It’s based on the size of your staking, and the amount of DiTo you own!</p>


                                    <button className="stake-button" type="submit">Stake!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="community-card-container">
                    <div className="card-grouping">
                        <h3 className="h3">Members</h3>
                        <div className={`group-1273 border-class-2 `}>
                        <div className="">{community.members}</div>
                        </div>
                    </div>

                    <div className="card-grouping">
                        <h3 className="h3">Open Projects</h3>
                        <div className="group-1273 border-class-2">
                        <div className="">{community.openGigs}</div>
                        </div>
                    </div>

                    <div className="card-grouping">
                        <div className="liquidity-text-box">
                            <h3 className="h3">Liquidity Pool</h3>
                            <div className="check-on-etherscan raleway-semi-bold-dove-gray-12px">
                                <p className="span-stake p">Check on </p>
                                <a className="span-stake p" href="https://www.google.com">Etherscan</a>
                            </div>
                        </div>

                        <div className={`group-1273 border-class-2 group-1329`}>
                        <div className="">3k</div>
                        </div>
                    </div>

                    <div className="card-grouping">
                        <h3 className="scarcity-score h3">Scarcity Score</h3>
                        <div>{community.scarcityScore}</div>
                    </div>
                </div>
            </div>
        </div>
          </Form>
        )}
      </Formik>
    </>
    );
}