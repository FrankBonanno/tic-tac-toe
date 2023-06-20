import Menu from './layouts/Menu/Menu';
import Board from './layouts/Board/Board';
import { TicTacToeContext } from './contexts/TicTacToeContext';
import { useContext } from 'react';

function App() {
  const { mode } = useContext(TicTacToeContext);

  return <div className="app">{mode === '' ? <Menu /> : <Board />}</div>;
}

export default App;
