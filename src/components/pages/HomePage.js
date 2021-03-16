import React from "react";
import '../css/HomePage.css'
import DelegateModal from '../modals/DelegateModal';
import StakeModal from '../modals/StakeModal';
import pokerChip from '../../assets/q2t-poker-chip.png';

const HomePage = () => {
  return (
    <div className="x01-i-want-to">
      <div className="rectangle-1596 border-class-1"></div>
      <div className="overlap-group">
        <div className="quadratic-treasury raleway-medium-ebb-24px">
          <span className="span">Quadratic Treasury (Q2T) uses Quadratic Funding to fund (and fundraise for) projects in the area of public goods.</span>
          <br></br><br></br>
          <span className="span-1">It’s fair, and sybil-resistant. And it’s the first decentralized platform to combine math 
            and unique, non-forgeable identities to fully automate the funding process. Continuously, and in a milestone-based approach.</span>
        </div>
      </div>
      <div className="overlap-group1">
      <img className="image-2" src={pokerChip} />

        <h1 className="i-want-to raleway-semi-bold-black-40px">I want to </h1>
        <div className="buttons">

          <DelegateModal></DelegateModal>
          <StakeModal></StakeModal>
        </div>
      </div>
    </div>
  );
}

export default HomePage;