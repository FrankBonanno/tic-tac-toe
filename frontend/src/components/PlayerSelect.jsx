import React, { useContext, useState } from 'react';
import XLogo from '../assets/icon-x.svg';
import OLogo from '../assets/icon-o.svg';
import { TicTacToeContext } from '../contexts/TicTacToeContext';

// Styles in Menu.css

const PlayerSelect = () => {
  const { player1, setPlayer1 } = useContext(TicTacToeContext);

  const switchPlayer = () => {
    setPlayer1(player1 === 'x' ? 'o' : 'x');
  };

  return (
    <div className="player-select ">
      <button className={`player-select-btn ${player1 === 'x' ? 'player-selected' : ''}`} onClick={() => switchPlayer()}>
        <img src={XLogo} className="player-selection" alt="x symbol" />
      </button>
      <button className={`player-select-btn ${player1 === 'o' ? 'player-selected' : ''}`} onClick={() => switchPlayer()}>
        <img src={OLogo} className="player-selection" alt="o symbol" />
      </button>
    </div>
  );
};

export default PlayerSelect;
