import React, { useEffect } from "react"
import { fund, approveDai } from "../../api/contracts";

import "../css/StakePage.css"

const StakePage = () =>  {

  return <X02Stake {...X02StakeData} />;
}

export default StakePage


function X02Stake(props) {
  const {
    text1,
    text2,
    number,
    members,
    openProjects,
    liquidityPool,
    scarcityScore,
    number2,
    spanText,
    spanText2,
    currency,
    amount,
    yourReturn,
    communityApy,
    path1491,
    text3,
    text4,
    text5,
    text6,
    text7,
    number3,
    price,
    dai,
    usdc,
    dai2,
    text8,
    iconIonicMdRadioButtonOn,
    iconIonicMdRadioButtonOn2,
    spanText3,
    spanText4,
    communityName,
    checkupCard,
    photo,
    michaelWhite,
    logOff,
    path1077,
    path1078,
    path1498,
    path1496,
    path1497,
    path1499,
    dashboard,
    path1032,
    path1033,
    notifications,
    path1501,
    settings,
    path1502,
    path1505,
    path1503,
    path1504,
    yourStats,
    path1506,
    addFunds,
    line35,
    line36,
    group1273Props,
    group12732Props,
  } = props;

  return (
    <div className="x02-stake">
      <div className="overlap-group">
        <div className="rectangle-19"></div>
        <div className="rectangle-1751 dove-gray-border-1px"></div>
        <div className="rectangle-1752 border-class-1"></div>
        <div className="text-1 raleway-medium-black-24px">{text1}</div>
        <h1 className="text-2 raleway-bold-black-30px">{text2}</h1>
        <div className="number raleway-bold-slimy-green-20px">{number}</div>
        <div className="members raleway-bold-black-16px">{members}</div>
        <div className="open-projects raleway-bold-black-16px">{openProjects}</div>
        <div className="liquidity-pool raleway-bold-black-16px">{liquidityPool}</div>
        <div className="scarcity-score raleway-bold-black-16px">{scarcityScore}</div>
        <Group1273 number={group1273Props.number} />
        <div className="group-1328 border-class-2">
          <div className="number-2 raleway-bold-black-16px">{number2}</div>
        </div>
        <Group1273 number={group12732Props.number} className="group-1329" />
        <div className="rectangle-1750 border-class-2"></div>
        <div className="check-on-etherscan raleway-semi-bold-dove-gray-12px">
          <span className="span0-x09oUk">{spanText}</span>
          <span className="span1-x09oUk">{spanText2}</span>
        </div>
        <div className="currency raleway-semi-bold-black-18px">{currency}</div>
        <div className="amount raleway-semi-bold-black-18px">{amount}</div>
        <div className="your-return raleway-semi-bold-black-18px">{yourReturn}</div>
        <div className="community-apy raleway-semi-bold-black-18px">{communityApy}</div>
        <div className="progress-bar-2 border-class-1">
          <div className="rectangle-621"></div>
        </div>
        <img className="path-1491" src={path1491} />
        <div className="bg border-class-1"></div>
        <p className="text-3 raleway-normal-black-14px">{text3}</p>
        <p className="text-4 raleway-normal-black-14px">{text4}</p>
        <p className="text-5 raleway-normal-black-14px">{text5}</p>
        <p className="text-6">{text6}</p>
        <div className="group-1324">
          <div className="overlap-group2">
            <div className="progress-bar-2-1 border-class-1">
              <div className="rectangle-621-1"></div>
            </div>
            <div className="text-7 raleway-bold-black-14px">{text7}</div>
          </div>
        </div>
        <div className="number-3">{number3}</div>
        <div className="price raleway-bold-black-14px">{price}</div>
        <div className="dai raleway-bold-black-14px">{dai}</div>
        <div className="usdc raleway-bold-black-14px">{usdc}</div>
        <div className="dai-1 raleway-bold-black-14px">{dai2}</div>
        <p className="text-8 raleway-normal-black-14px">{text8}</p>
        <img className="icon-ionic--button-on" src={iconIonicMdRadioButtonOn} />
        <img className="icon-ionic--button-on-1" src={iconIonicMdRadioButtonOn2} />
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="delegate-stake">
          <span className="span0-lNgTr4">{spanText3}</span>
          <span className="span1-lNgTr4">{spanText4}</span>
        </div>
        <div className="community-name">{communityName}</div>
        <div className="checkup-card">{checkupCard}</div>
      </div>
      <div className="overlap-group1">
        <div className="side-menu">
          <div className="top">
            <img className="photo" src={photo} />
            <div className="michael-white">{michaelWhite}</div>
          </div>
        </div>
        <div className="rectangle-1609 dove-gray-border-1px"></div>
        <div className="rectangle-1614 dove-gray-border-1px"></div>
        <div className="log-off raleway-bold-black-24px">{logOff}</div>
        <div className="group-26">
          <div className="overlap-group2-1">
            <img className="path-1077" src={path1077} />
            <img className="path-1078" src={path1078} />
          </div>
        </div>
        <div className="group-25 dove-gray-border-1px">
          <div className="people">
            <div className="auto-flex">
              <img className="path-1498" src={path1498} />
              <img className="path-1496" src={path1496} />
            </div>
            <div className="overlap-group2-2">
              <img className="path-1497" src={path1497} />
              <img className="path-1499" src={path1499} />
            </div>
          </div>
          <div className="dashboard raleway-bold-black-20px">{dashboard}</div>
        </div>
        <div className="group-23 dove-gray-border-1px">
          <div className="group-21">
            <img className="path-1032" src={path1032} />
            <img className="path-1033" src={path1033} />
          </div>
          <div className="notifications raleway-bold-black-20px">{notifications}</div>
        </div>
        <div className="group-22 dove-gray-border-1px">
          <img className="path-1501" src={path1501} />
          <div className="settings raleway-bold-black-20px">{settings}</div>
        </div>
        <div className="group-24 dove-gray-border-1px">
          <div className="stats-chart-sharp">
            <img className="path-1502" src={path1502} />
            <img className="path-1505" src={path1505} />
            <img className="path-1503" src={path1503} />
            <img className="path-1504" src={path1504} />
          </div>
          <div className="your-stats raleway-bold-black-20px">{yourStats}</div>
        </div>
        <img className="path-1506" src={path1506} />
        <div className="add-funds raleway-bold-black-24px">{addFunds}</div>
        <img className="line-35" src={line35} />
        <img className="line-36" src={line36} />
      </div>
    </div>
  );
}


function Group1273(props) {
  const { number, className } = props;

  return (
    <div className={`group-1273 border-class-2 ${className || ""}`}>
      <div className="number-1 raleway-bold-black-16px">{number}</div>
    </div>
  );
}
const group1273Data = {
    number: "10",
};

const group12732Data = {
    number: "3k",
};

const X02StakeData = {
    text1: "Delegate funds to your Treasury to accrue returns for new projects!",
    text2: "Stake in your Community Treasury",
    number: "72",
    members: "Members",
    openProjects: "Open projects",
    liquidityPool: "Liquidity Pool",
    scarcityScore: "Scarcity Score",
    number2: "3",
    spanText: "Check on ",
    spanText2: "Etherscan",
    currency: "Currency",
    amount: "Amount",
    yourReturn: "Your Return",
    communityApy: "Community APY",
    path1491: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1491-1@1x.png",
    text3: "The amount of tokens you stake for your community.",
    text4: "“Staking” is different from “Donating” - basically your Treasury is “locking” these funds to provide liquidity. In exchange, you all get a higher interest return!",
    text5: "It’s based on the size of your staking, and the amount of DiTo you own!",
    text6: "Your initial investment plus: ",
    text7: "24%",
    number3: "5000",
    price: "17,15 USD",
    dai: "DAI ",
    usdc: "USDC",
    dai2: "DAI",
    text8: <>Stablecoins are non-volatile cryptocurrencies. They are “pegged” to Fiat (USD), so to remain stable:<br/>1 DAI  = 1 US Dollar<br/>1 USDC = 1 US Dollar</>,
    iconIonicMdRadioButtonOn: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/icon-ionic-md-radio-button-on-2@1x.png",
    iconIonicMdRadioButtonOn2: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/icon-ionic-md-radio-button-on-1@1x.png",
    spanText3: "Delegate & Stake",
    spanText4: "!",
    communityName: "Community Name",
    checkupCard: "Checkup Card",
    photo: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/photo-1@1x.png",
    michaelWhite: "Jabyl",
    logOff: "Log off",
    path1077: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1077-1@1x.png",
    path1078: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1078-1@1x.png",
    path1498: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1498-1@1x.png",
    path1496: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1496-1@1x.png",
    path1497: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1497-1@1x.png",
    path1499: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1499-1@1x.png",
    dashboard: "Dashboard",
    path1032: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1032-1@1x.png",
    path1033: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1033-1@1x.png",
    notifications: "Notifications",
    path1501: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1501-1@1x.png",
    settings: "Settings",
    path1502: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1502-1@1x.png",
    path1505: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1505-1@1x.png",
    path1503: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1503-1@1x.png",
    path1504: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1504-1@1x.png",
    yourStats: "Your Stats",
    path1506: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/path-1506-1@1x.png",
    addFunds: "Add funds",
    line35: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-35-1@1x.png",
    line36: "https://anima-uploads.s3.amazonaws.com/projects/60126ea786f83e0fcc799456/releases/60126ec431580128926bc3d9/img/line-35-1@1x.png",
    group1273Props: group1273Data,
    group12732Props: group12732Data,
};

