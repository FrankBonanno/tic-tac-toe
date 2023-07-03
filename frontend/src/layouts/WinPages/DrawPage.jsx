import React, { useContext, useState } from 'react';
import Popup from '../../components/Popup/Popup';
import { TicTacToeContext } from '../../contexts/TicTacToeContext';

const DrawPage = () => {
  const [isRestarting, setIsRestarting] = useState(false);
  const { resetGame, setMode, resetScores } = useContext(TicTacToeContext);

  return (
    <Popup>
      <div className="restart-ctx">
        <h3 className="heading-lg">Round Tied</h3>
        <div className="restart-btns">
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
          <button
            className="btn-sm btn-gold-sm heading-xs"
            onClick={() => {
              resetGame();
              setIsRestarting(false);
            }}
          >
            Next Round
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default DrawPage;
