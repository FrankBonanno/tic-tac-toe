import React, { createContext, useState } from 'react';

// Create the TicTacToeContext
const TicTacToeContext = createContext();

// Create a TicTacToeProvider component to wrap the app
const TicTacToeProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [winner, setWinner] = useState(null);

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
        console.log(winner);
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      setWinner('draw');
    }
  };

  // Provide the context value to consuming components
  return (
    <TicTacToeContext.Provider value={{ board, currentPlayer, winner, resetGame, updateBoard }}>
      {children}
    </TicTacToeContext.Provider>
  );
};

export { TicTacToeContext, TicTacToeProvider };