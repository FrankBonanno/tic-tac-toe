import React, { useContext } from 'react';
import './Board.css';

import logo from '../../assets/logo.svg';
import XLogo from '../../assets/icon-x.svg';
import OLogo from '../../assets/icon-o.svg';
import RestartLogo from '../../assets/icon-restart.svg';

import { TicTacToeContext } from '../../contexts/TicTacToeContext';
import OWinPage from '../WinPages/OWinPage';
import XWinPage from '../WinPages/XWinPage';
import DrawPage from '../WinPages/DrawPage';

const Board = () => {
  const { board, updateBoard, currentPlayer, winner } = useContext(TicTacToeContext);

  if (winner === 'o') {
    return <OWinPage />;
  } else if (winner === 'x') {
    return <XWinPage />;
  } else if (winner === 'draw') {
    return <DrawPage />;
  }

  return (
    <div className="Board__container">
      <div className="Board__header">
        <img src={logo} width={72} height={32} alt="X and O Logo" />

        <div className="Board_player">
          <img src={XLogo} width={20} height={20} alt="X Logo" />
          <h1 className="heading-xs">TURN</h1>
        </div>

        <button className="restart-btn-sm">
          <img src={RestartLogo} width={20} height={20} alt="X Logo" />
        </button>
      </div>

      <div className="Board">
        {board.map((item, index) => {
          return (
            <div className="Board__item" key={index} onClick={() => updateBoard(index)}>
              <img
                src={item && item === 'x' ? XLogo : item === 'o' ? OLogo : ''}
                width={item && 72}
                height={item && 72}
                className={`${item === 'x' ? 'cyan-filter' : item === 'o' ? 'gold-filter' : ''}`}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="Board__scores">
        <div className="Board__x-score">
          <p>X (YOU)</p>
          <h3 className="heading-md">0</h3>
        </div>
        <div className="Board__tie-score">
          <p>TIES</p>
          <h3 className="heading-md">0</h3>
        </div>
        <div className="Board__o-score">
          <p>O (CPU)</p>
          <h3 className="heading-md">0</h3>
        </div>
      </div>
    </div>
  );
};

export default Board;
