import React, { useContext } from 'react';
import Popup from '../../components/Popup/Popup';
import { TicTacToeContext } from '../../contexts/TicTacToeContext';

const RestartPage = ({ isRestarting, setIsRestarting }) => {
  const { resetGame } = useContext(TicTacToeContext);
  return (
    <Popup>
      <div className="restart-ctx">
        <h3 className="heading-lg">Restart Game?</h3>
        <div className="restart-btns">
          <button className="btn-sm btn-silver heading-xs" onClick={() => setIsRestarting(false)}>
            No, Cancel
          </button>
          <button
            className="btn-sm btn-gold-sm heading-xs"
            onClick={() => {
              resetGame();
              setIsRestarting(false);
            }}
          >
            Yes, Restart
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default RestartPage;
