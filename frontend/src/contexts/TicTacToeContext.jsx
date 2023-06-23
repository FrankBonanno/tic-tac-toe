import React, { createContext, useEffect, useState } from 'react';

// Create the TicTacToeContext
const TicTacToeContext = createContext();

// Create a TicTacToeProvider component to wrap the app
const TicTacToeProvider = ({ children }) => {
  const initialBoard = JSON.parse(localStorage.getItem('board')) || Array(9).fill(null);
  const initialScores = JSON.parse(localStorage.getItem('scores')) || { x: 0, ties: 0, o: 0 };
  const initialMode = JSON.parse(localStorage.getItem('mode')) || '';
  const initialCurrentPlayer = JSON.parse(localStorage.getItem('currPlayer')) || 'x';

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(initialCurrentPlayer);
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState('x');
  const [mode, setMode] = useState(initialMode);
  const [scores, setScores] = useState(initialScores);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('x');
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return; // Skip if the position is already filled or there's a winner

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    checkWinner(newBoard);
    togglePlayer();
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        const win = board[a];
        setScores((prevScores) => ({
          ...prevScores,
          [win]: prevScores[win] + 1,
        }));
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      setWinner('draw');
      setScores((prevScores) => ({
        ...prevScores,
        ties: prevScores.ties + 1,
      }));
    }
  };

  const resetScores = () => {
    setScores({ x: 0, ties: 0, o: 0 });
    localStorage.setItem('scores', JSON.stringify(scores));
  };

  useEffect(() => {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('currPlayer', JSON.stringify(currentPlayer));
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [board, scores, currentPlayer, mode]);

  // Provide the context value to consuming components
  return (
    <TicTacToeContext.Provider
      value={{
        board,
        currentPlayer,
        winner,
        resetGame,
        updateBoard,
        mode,
        setMode,
        player1,
        setPlayer1,
        scores,
        setScores,
        resetScores,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
};

export { TicTacToeContext, TicTacToeProvider };
