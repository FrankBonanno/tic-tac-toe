import React, { useContext } from 'react';
import Popup from '../../components/Popup/Popup';
import OLogo from '../../assets/icon-o-gold.svg';
import { TicTacToeContext } from '../../contexts/TicTacToeContext';
import './WinPage.css';

const OWinPage = () => {
  const { setMode, resetGame, resetScores, player1, mode } = useContext(TicTacToeContext);

  let winText = '';
  if (player1 === 'o') {
    if (mode === 'local') {
      winText = 'Player 1 Won!';
    } else {
      winText = 'You Won!';
    }
  } else {
    if (mode === 'local') {
      winText = 'Player 2 Won!';
    } else {
      winText = 'You Lost!';
    }
  }

  return (
    <Popup>
      <div className="x-win-cont">
        <h3 className="heading-xs">{winText}</h3>
        <div className="o-win-title">
          <img src={OLogo} className="win-logo" alt="X Symbol" />
          <h2 className="heading-lg">TAKES THE ROUND</h2>
        </div>
        <div className="x-win-btns">
          <button
            className="btn-sm btn-silver heading-xs"
            onClick={() => {
              resetGame();
              setMode('');
              resetScores();
            }}
          >
            quit
          </button>
          <button className="btn-sm btn-gold-sm heading-xs" onClick={() => resetGame()}>
            next round
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default OWinPage;
