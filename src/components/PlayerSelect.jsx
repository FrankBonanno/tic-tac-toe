import React from 'react';
import XLogo from '../assets/icon-x.svg';
import OLogo from '../assets/icon-o.svg';

// Styles in Menu.css

const PlayerSelect = () => {
  return (
    <div className="player-select ">
      <button className="player-select-btn">
        <img src={XLogo} className="player-selection" />
      </button>
      <button className="player-select-btn player-selected">
        <img src={OLogo} className="player-selection" />
      </button>
    </div>
  );
};

export default PlayerSelect;
