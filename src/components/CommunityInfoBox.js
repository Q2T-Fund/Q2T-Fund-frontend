import React from 'react'

export default function CommunityInfoBox() {
  const number = "72",
    members = "Members",
    openProjects = "Open projects",
    liquidityPool = "Liquidity Pool",
    scarcityScore = "Scarcity Score",
    number2 = "10",
    number3 = "3",
    x3K = "3k",
    spanText = "Check on ",
    spanText2 = "Etherscan",
    communityName = "Community Name",
    checkupCard = "Checkup Card"

  return (
    <div className="x02-stake">
      <div className="overlap-group">
        <div className="rectangle-1752 border-class-1"></div>
        <div className="number raleway-bold-slimy-green-20px">{number}</div>
        <div className="members raleway-bold-black-16px">{members}</div>
        <div className="open-projects raleway-bold-black-16px">{openProjects}</div>
        <div className="liquidity-pool raleway-bold-black-16px">{liquidityPool}</div>
        <div className="scarcity-score raleway-bold-black-16px">{scarcityScore}</div>
        <div className="number-1 raleway-bold-black-16px">{number2}</div>
        <div className="number-2 raleway-bold-black-16px">{number3}</div>
        <div className="x3k raleway-bold-black-16px">{x3K}</div>
        <div className="rectangle-1750 border-class-2"></div>
        <div className="check-on-etherscan raleway-semi-bold-dove-gray-12px">
          <span className="span0">{spanText}</span>
          <span className="span1">{spanText2}</span>
        </div>
        <div className="bg"></div>
        <div className="community-name raleway-bold-white-20px">{communityName}</div>
        <div className="checkup-card raleway-semi-bold-white-18px">{checkupCard}</div>
      </div>
    </div>
  )
}
