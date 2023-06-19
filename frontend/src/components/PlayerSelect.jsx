import React, { useState } from 'react';
import XLogo from '../assets/icon-x.svg';
import OLogo from '../assets/icon-o.svg';

// Styles in Menu.css

const PlayerSelect = () => {
  const [player, setPlayer] = useState('X');
  console.log('player', player);

  const switchPlayer = () => {
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  return (
    <div className="player-select ">
      <button className={`player-select-btn ${player === 'X' ? 'player-selected' : ''}`} onClick={() => switchPlayer()}>
        <img src={XLogo} className="player-selection" alt="x symbol" />
      </button>
      <button className={`player-select-btn ${player === 'O' ? 'player-selected' : ''}`} onClick={() => switchPlayer()}>
        <img src={OLogo} className="player-selection" alt="o symbol" />
      </button>
    </div>
  );
};

export default PlayerSelect;
