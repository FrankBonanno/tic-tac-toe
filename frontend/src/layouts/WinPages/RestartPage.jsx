import React from 'react';
import Popup from '../../components/Popup/Popup';

const RestartPage = () => {
  return (
    <Popup>
      <div className="restart-ctx">
        <h3 className="heading-lg">Restart Game?</h3>
        <div className="restart-btns">
          <button className="btn-sm btn-silver heading-xs">No, Cancel</button>
          <button className="btn-sm btn-gold-sm heading-xs">Yes, Restart</button>
        </div>
      </div>
    </Popup>
  );
};

export default RestartPage;
