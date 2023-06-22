import React, { useContext } from 'react';
import Popup from '../../components/Popup/Popup';
import XLogo from '../../assets/icon-x-cyan.svg';
import { TicTacToeContext } from '../../contexts/TicTacToeContext';

const XWinPage = () => {
  const { setMode, resetGame } = useContext(TicTacToeContext);

  return (
    <Popup>
      <div className="x-win-cont">
        <h3 className="heading-xs">You Won!</h3>
        <div className="x-win-title">
          <img src={XLogo} className="win-logo" alt="X Symbol" />
          <h2 className="heading-lg">TAKES THE ROUND</h2>
        </div>
        <div className="x-win-btns">
          <button
            className="btn-sm btn-silver heading-xs"
            onClick={() => {
              resetGame();
              setMode('');
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

export default XWinPage;
