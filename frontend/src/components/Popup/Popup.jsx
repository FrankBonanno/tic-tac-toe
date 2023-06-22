import React from 'react';
import './Popup.css';
// popup gone?

const Popup = ({ children }) => {
  return (
    <div className="pop-up">
      <div className="pop-up-ctx">{children}</div>
    </div>
  );
};

export default Popup;
