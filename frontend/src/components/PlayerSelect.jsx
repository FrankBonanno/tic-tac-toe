import React, { useContext, useState } from 'react';
import XLogo from '../assets/icon-x.svg';
import OLogo from '../assets/icon-o.svg';
import { TicTacToeContext } from '../contexts/TicTacToeContext';

// Styles in Menu.css

const PlayerSelect = () => {
  const { player1, setPlayer1, setScores, setCPU } = useContext(TicTacToeContext);

  const setPlayer = (letter) => {
    setPlayer1(letter);
    setCPU(letter === 'x' ? 'o' : 'x');
    setScores((prev) => ({
      x: prev.o,
      ties: prev.ties,
      o: prev.x,
    }));
  };

  return (
    <div className="player-select ">
      <button
        className={`player-select-btn ${player1 === 'x' ? 'player-selected' : ''}`}
        onClick={() => setPlayer('x')}
      >
        <img src={XLogo} className="player-selection" alt="x symbol" />
      </button>
      <button
        className={`player-select-btn ${player1 === 'o' ? 'player-selected' : ''}`}
        onClick={() => setPlayer('o')}
      >
        <img src={OLogo} className="player-selection" alt="o symbol" />
      </button>
    </div>
  );
};

export default PlayerSelect;
