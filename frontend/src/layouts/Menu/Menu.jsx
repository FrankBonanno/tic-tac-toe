import './Menu.css';
import logo from '../../assets/logo.svg';
import PlayerSelect from '../../components/PlayerSelect';
import { useContext } from 'react';
import { TicTacToeContext } from '../../contexts/TicTacToeContext';

const Menu = () => {
  const { setMode } = useContext(TicTacToeContext);

  return (
    <div className="menu">
      <img src={logo} width={72} height={32} alt="X and O Logo" />

      <div className="menu-container">
        <h1 className="heading-xs">Pick Player 1's Mark</h1>
        <PlayerSelect />
        <p>REMEMBER: X GOES FIRST</p>
      </div>

      <div className="play-buttons">
        <button
          className="button-lg btn-gold"
          onClick={() => {
            setMode('cpu');
            localStorage.setItem('mode', JSON.stringify('cpu'));
          }}
        >
          <h3 className="heading-xs">NEW GAME (VS CPU)</h3>
        </button>
        <button
          className="button-lg btn-cyan"
          onClick={() => {
            setMode('local');
            localStorage.setItem('mode', JSON.stringify('local'));
          }}
        >
          <h3 className="heading-xs">NEW GAME (VS PLAYER)</h3>
        </button>
      </div>
    </div>
  );
};

export default Menu;
