import React, { useContext, useState } from 'react';
import './Board.css';

import logo from '../../assets/logo.svg';
import XLogo from '../../assets/icon-x.svg';
import XOutline from '../../assets/icon-x-outline.svg';
import OLogo from '../../assets/icon-o.svg';
import OOutline from '../../assets/icon-o-outline.svg';
import RestartLogo from '../../assets/icon-restart.svg';

import { TicTacToeContext } from '../../contexts/TicTacToeContext';
import OWinPage from '../WinPages/OWinPage';
import XWinPage from '../WinPages/XWinPage';
import DrawPage from '../WinPages/DrawPage';
import RestartPage from '../WinPages/RestartPage';

const Board = () => {
  const { board, updateBoard, currentPlayer, winner, player1, scores, mode } = useContext(TicTacToeContext);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [isRestarting, setIsRestarting] = useState(false);

  return (
    <div className="Board__container">
      {winner === 'o' && <OWinPage />}
      {winner === 'x' && <XWinPage />}
      {winner === 'draw' && <DrawPage />}
      {isRestarting && <RestartPage isRestarting={isRestarting} setIsRestarting={setIsRestarting} />}

      <div className="Board__header">
        <img src={logo} width={72} height={32} alt="X and O Logo" />

        <div className="Board_player">
          <img src={XLogo} width={20} height={20} alt="X Logo" />
          <h1 className="heading-xs">TURN</h1>
        </div>

        <button className="restart-btn-sm" onClick={() => setIsRestarting(true)}>
          <img src={RestartLogo} width={20} height={20} alt="X Logo" />
        </button>
      </div>

      <div className="Board">
        {board.map((item, index) => {
          const isCellEmpty = !item;
          const isXPlayer = currentPlayer === 'x';

          return (
            <div
              className={`Board__item ${isCellEmpty && hoveredCell === index ? 'hovered' : ''}`}
              key={index}
              onClick={() => updateBoard(index)}
              onMouseEnter={() => setHoveredCell(index)}
              onMouseLeave={() => setHoveredCell(null)}
            >
              <img
                src={item && item === 'x' ? XLogo : item === 'o' ? OLogo : ''}
                width={item && 72}
                height={item && 72}
                className={`${item === 'x' ? 'cyan-filter' : item === 'o' ? 'gold-filter' : ''}`}
                alt=""
              />
              {isCellEmpty && isXPlayer && hoveredCell === index && currentPlayer === player1 && (
                <img src={XOutline} className="outline-symbol" alt="Outline Symbol" />
              )}
              {isCellEmpty && !isXPlayer && hoveredCell === index && currentPlayer === player1 && (
                <img src={OOutline} className="outline-symbol" alt="Outline Symbol" />
              )}
            </div>
          );
        })}
      </div>

      <div className="Board__scores">
        <div className="Board__x-score">
          <p>X ({player1 === 'x' ? `${mode === 'cpu' ? 'YOU' : 'P1'}` : `${mode === 'cpu' ? 'CPU' : 'P2'}`})</p>
          <h3 className="heading-md">{scores.x}</h3>
        </div>
        <div className="Board__tie-score">
          <p>TIES</p>
          <h3 className="heading-md">{scores.ties}</h3>
        </div>
        <div className="Board__o-score">
          <p>O ({player1 === 'o' ? `${mode === 'cpu' ? 'YOU' : 'P1'}` : `${mode === 'cpu' ? 'CPU' : 'P2'}`})</p>
          <h3 className="heading-md">{scores.o}</h3>
        </div>
      </div>
    </div>
  );
};

export default Board;
