import React from "react";
import './css/HomePage.css'
import DelegateModal from './modals/DelegateModal';
import StakeModal from './modals/StakeModal';
import pokerChip from '../assets/q2t-poker-chip.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="overlap-group">
        <div className="quadratic-treasury">
          <span className="heavier-span">Quadratic Treasury (Q2T) uses Quadratic Funding to fund (and fundraise for) projects in the area of public goods.</span>
          <br></br><br></br>
          <span>It’s fair, and sybil-resistant. And it’s the first decentralized platform to combine math 
            and unique, non-forgeable identities to fully automate the funding process. Continuously, and in a milestone-based approach.</span>
        </div>
      </div>

      <div className="overlap-group1">
      <img className="image-2" src={pokerChip} />

        <h1 className="raleway-semi-bold-black-40px">I want to </h1>
        <div className="buttons">

          <DelegateModal></DelegateModal>
          <StakeModal></StakeModal>
        </div>
      </div>
    </div>
  );
}

export default HomePage;