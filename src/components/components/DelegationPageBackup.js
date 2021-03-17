// import React, { useReducer, useState } from "react";
// import { DatePicker } from "antd"

// import 'antd/dist/antd.css';
// import "../css/DelegationPage.css"

// import { Grid, Label, Input, Form, Checkbox } from "semantic-ui-react"
// import { Slider } from "react-semantic-ui-range";




// // <Input placeholder="Enter Value" onChange={handleValueChange} />

// const DelegationPage = () => {

//   const initialState = { tokenAmount: 0, repaymentPercent: 0, totalReturn: 0, currency: 'DAI' }
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'updateAmount': {
//         return { ...state, tokenAmount: action.data }
//       }
//       case 'updateRepaymentPercent': {
//         return { ...state, repaymentPercent: action.data }
//       }
//       case 'updateTotalReturn': {
//         return { ...state, totalReturn: action.data }
//       }
//       case 'updateCurrency': {
//         return { ...state, currency: action.data}
//       }
//       default: {
//         throw new Error("Error mann!")
//       }
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)



//   const Repayment = () => {

//     const settings = {
//       start: 0,
//       min: 0,
//       max: 50,
//       step: 1,
//       onChange: value => {
//         dispatch({ type: 'updateRepaymentPercent', data: value })
//       }
//     };


//     return (
//       <>
//         <Grid columns={2}>
//           <Grid.Column width={12}>
//             <Slider value={state.repaymentPercent} color="black" settings={settings}></Slider>
//           </Grid.Column>
//           <Grid.Column width={4}>
//             <Label>{`${state.repaymentPercent} %`}</Label>
//           </Grid.Column>
//         </Grid>
//       </>
//     )
//   }




//   const Amount = () => {

//     //const [amount, setAmount] = useState(0)

//     const amountOnChange = (e) => {
//       e.preventDefault()
//       const value = Number(e.target.value)
//       //setAmount(value)
//       dispatch({ type: 'updateAmount', data: value })
//       console.log(state.repaymentPercent)
//       // components start lagging immediately when uncommenting the line above...
//     }

//     return <input
//       name="amount"
//       type="number"
//       value={""}
//       placeholder="5000"
//       onChange={e => amountOnChange(e)}
//     />

// /*
//         <Form>
//         <Form.Field>
//           <Checkbox
//             radio
//             label='DAI'
//             name='checkboxRadioGroup'
//             value={'DAI'}
//             checked={state.currency === 'DAI'}
//             onChange={currencyOnChange}
//           />
//           <Checkbox
//             radio
//             label='USDC'
//             name='checkboxRadioGroup'
//             value='USDC'
//             checked={state.currency === 'USDC'}
//             onChange={currencyOnChange}
//           />
//         </Form.Field>
//       </Form>
// */

//   }


//   const Currency = () => {

//     const currencyOnChange = (e) => {
//       e.preventDefault()

//       if (state.currency === "DAI") {
//         dispatch({ type: 'updateCurrency', data: 'USDC' })
//       }

//       if (state.currency === "USDC") {
//         dispatch({ type: 'updateCurrency', data: 'DAI' })
//       }

//     }
//     return (
//     <>
//     <Label> DAI
//     <input type="radio" name="DAI"
//     value="DAI"
//     checked={state.currency === "DAI"}
//     onChange={e => currencyOnChange(e)}
//     />
//     </Label>

//     <Label> USDC
//     <input type="radio" name="USDC"
//     value={"USDC"}
//     checked={state.currency === "USDC"}
//     onChange={e => currencyOnChange(e)}
//     />
//     </Label>
//     </>
//     )


//   }

//   const text1 =  "Choose the area and the type of Project you want to fund."
//   const text2 = "Support the Public Goods!"
//   const image7 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png"
//   const title = (<>Blockchain &<br/>Open-Source</>)
//   const description = "Description of this area of Public Goods."
//   const line26 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png"
//   const articles="xx Active Projects"
//   const image72 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png"
//   const title2 = <>Art, Events <br/>& Lifestyle</>
//   const description2 = "Description of this area of Public Goods."
//   const line262 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png"
//   const articles2 = "xx Active Projects"
//   const image73 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/image-7-1@1x.png"
//   const title3 = <>Local <br/>Communities</>
//   const description3 = "Description of this area of Public Goods."
//   const line263 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-26-1@1x.png"
//   const articles3 = "xx Active Projects"
//   const amount = "Amount"
//   const yourReturn ="Your Return"
//   const repaymentStructure = "Repayment Structure"
//   const path1491 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491@1x.png"
//   const spanText = "By delegating the Treasury, you can fund and support projects for the Public Goods. The Quadratic Treasury will be “locking” these funds to provide “"
//   const spanText2 = "non-repayable loans"
//   const spanText3 ="” to these projects using Quadratic Funding and a milestone-based approach to prevent any form of fraud and collusion."
//   const text3 = "Decide whether you want it to be a full donation, or receive back part of your funds."
//   const text4 = "This is how much you will receive back from your funds. Plus interest!"
//   const text5 = "20%"
//   const number = "5000"
//   const price ="1000 USD"
//   const iconIonicMdRadioButtonOn = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/icon-ionic-md-radio-button-on-2@1x.png"
//   const dai = "DAI"
//   const iconIonicMdRadioButtonOn2 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/icon-ionic-md-radio-button-on-1@1x.png"
//   const usdc = "USDC"
//   const spanText4 ="Delegate & Support"
//   const spanText5 = "!"
//   const title4 = "Your Delegation Agreement"
//   const number2 = "0%"
//   const number3 = "50%"
//   const photo = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/photo-1@1x.png"
//   const michaelWhite = "Jabyl"
//   const logOff =  "Log off"
//   const path1077 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1077-1@1x.png"
//   const path1078 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1078-1@1x.png"
//   const path1498 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1498@1x.png"
//   const path1496 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1496-1@1x.png"
//   const path1497 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1497@1x.png"
//   const path1499 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1499-1@1x.png"
//   const dashboard =  "Dashboard"
//   const path1032 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1032-1@1x.png"
//   const path1033 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1033-1@1x.png"
//   const notifications = "Notifications"
//   const path1501 =  "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1501@1x.png"
//   const settings =  "Settings"
//   const path1502 =  "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1502-1@1x.png"
//   const path1505 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1505-1@1x.png"
//   const path1503 ="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1503-1@1x.png"
//   const path1504 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1504-1@1x.png"
//   const yourStats = "Your Stats"
//   const path1506 ="https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1506-1@1x.png"
//   const addFunds = "Add funds"
//   const line35 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-35-1@1x.png"
//   const line36 = "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-35-1@1x.png"


//   return (
//     <div className="x01b-delegation-agreement">
//       <div className="overlap-group">
//         <div className="rectangle-19"></div>
//         <div className="text-1 raleway-medium-black-20px">{text1}</div>
//         <h1 className="text-2 raleway-bold-black-30px">{text2}</h1>
//         <div className="group-1325">
//           <div className="auto-flex">
//             <img className="image-7" src={image7} />
//             <div className="title raleway-bold-alto-22px">{title}</div>
//           </div>
//           <div className="description raleway-normal-alto-18px">{description}</div>
//           <img className="line-26" src={line26} />
//           <div className="articles raleway-normal-alto-13px">{articles}</div>
//         </div>
//         <div className="group-1326">
//           <div className="auto-flex1">
//             <img className="image-7" src={image72} />
//             <div className="title-1 raleway-bold-alto-22px">{title2}</div>
//           </div>
//           <div className="description-1 raleway-normal-alto-18px">{description2}</div>
//           <img className="line-26-1" src={line262} />
//           <div className="articles-1 raleway-normal-alto-13px">{articles2}</div>
//         </div>
//         <div className="group-1327">
//           <div className="auto-flex2">
//             <img className="image-7" src={image73} />
//             <div className="title-2 raleway-bold-alto-22px">{title3}</div>
//           </div>
//           <div className="description-1 raleway-normal-alto-18px">{description3}</div>
//           <img className="line-26-1" src={line263} />
//           <div className="articles-1 raleway-normal-alto-13px">{articles3}</div>
//         </div>
//         <div className="rectangle-1751 dove-gray-border-1px"></div>
//         <div className="amount raleway-semi-bold-black-18px">{amount}</div>



//         <div className="your-return raleway-semi-bold-black-18px">{yourReturn}
//           <div className="repayment-structure raleway-semi-bold-black-18px">{repaymentStructure}</div>
//           <div className="progress-bar-2 border-class-1">
//             <div className="rectangle-621"></div>
//           </div>
//           <img className="path-1491" src={path1491} />
//           <div className="bg green-blue-border-2px"></div>
//           <p className="by-delegating-the-tr">
//             <span className="span">{spanText}</span>
//             <span className="span1-DQxoii">{spanText2}</span>
//             <span className="span">{spanText3}</span>
//           </p>

//           <p className="text-3 raleway-normal-black-14px">{text3}</p>
//           <p className="text-4 raleway-normal-black-14px">{text4}</p>
//           <div className="group-1324">
//             <div className="overlap-group2">

//               {<Repayment />}


//             </div>
//           </div>

//           <div className="number">{<><Amount /> <Currency /> </>}</div>




//           <div className="price raleway-bold-black-14px">{`${`1000`} USD`}</div>





//           <div className="bg-1"></div>
//           <div className="delegate-support">
//             <a href="thankyou" className="span0">{spanText4}</a>
//             <span className="span1-wdFYhX">{spanText5}</span>
//           </div>
//           <div className="bg-2 border-class-1"></div>
//           <div className="title-3">{title4}</div>
//           <div className="number-1 raleway-bold-black-14px">{number2}</div>

//           <div className="number-2 raleway-bold-black-14px">{number3}</div>
//         </div>
//       </div>
//       <div className="overlap-group1">
//         <div className="side-menu">
//           <div className="top">
//             <img className="photo" src={photo} />
//             <div className="michael-white">{michaelWhite}</div>
//           </div>
//         </div>
//         <div className="rectangle-1609 dove-gray-border-1px"></div>
//         <div className="rectangle-1614 dove-gray-border-1px"></div>
//         <div className="log-off raleway-bold-black-24px">{logOff}</div>
//         <div className="group-26">
//           <div className="overlap-group2-1">
//             <img className="path-1077" src={path1077} />
//             <img className="path-1078" src={path1078} />
//           </div>
//         </div>
//         <div className="group-25 dove-gray-border-1px">
//           <div className="people">
//             <div className="auto-flex-1">
//               <img className="path-1498" src={path1498} />
//               <img className="path-1496" src={path1496} />
//             </div>
//             <div className="overlap-group2-2">
//               <img className="path-1497" src={path1497} />
//               <img className="path-1499" src={path1499} />
//             </div>
//           </div>
//           <div className="dashboard raleway-bold-black-20px">{dashboard}</div>
//         </div>
//         <div className="group-23 dove-gray-border-1px">
//           <div className="group-21">
//             <img className="path-1032" src={path1032} />
//             <img className="path-1033" src={path1033} />
//           </div>
//           <div className="notifications raleway-bold-black-20px">{notifications}</div>
//         </div>
//         <div className="group-22 dove-gray-border-1px">
//           <img className="path-1501" src={path1501} />
//           <div className="settings raleway-bold-black-20px">{settings}</div>
//         </div>
//         <div className="group-24 dove-gray-border-1px">
//           <div className="stats-chart-sharp">
//             <img className="path-1502" src={path1502} />
//             <img className="path-1505" src={path1505} />
//             <img className="path-1503" src={path1503} />
//             <img className="path-1504" src={path1504} />
//           </div>
//           <div className="your-stats raleway-bold-black-20px">{yourStats}</div>
//         </div>
//         <img className="path-1506" src={path1506} />
//         <div className="add-funds raleway-bold-black-24px">{addFunds}</div>
//         <img className="line-35" src={line35} />
//         <img className="line-36" src={line36} />
//       </div>
//     </div>
//   );
// }






// export default DelegationPage;