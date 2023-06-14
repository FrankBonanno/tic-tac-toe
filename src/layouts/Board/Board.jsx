import React from 'react';
import './Board.css';

import logo from '../../assets/logo.svg';
import XLogo from '../../assets/icon-x.svg';
import OLogo from '../../assets/icon-o.svg';
import RestartLogo from '../../assets/icon-restart.svg';

const tempBoard = Array(9).fill({
  value: null,
  isX: null,
});

const Board = () => {
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
        {tempBoard.map((item, index) => {
          return (
            <div className="Board__item" key={index}>
              <img src={item.value} className={`${item.isX ? 'cyan-filter' : 'gold-filter'}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
