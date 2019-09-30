/* eslint-disable no-plusplus */

const gameBoard = () => {
  const board = Array.from(Array(10), () => Array(10).fill(0));

  const placeShips = (ships) => {
    const leftIsValidPosition = (size, x, y) => {
      for (let i = 0; i < size + 1; i++) {
        if (board[x - i][y] === 1) return false;
      }
      return true;
    };

    const rightIsValidPosition = (size, x, y) => {
      for (let i = 0; i < size + 1; i++) {
        if (board[x + i][y] === 1) return false;
      }
      return true;
    };

    const topIsValidPosition = (size, x, y) => {
      for (let i = 0; i < size + 1; i++) {
        if (board[x][y - 1] === 1) return false;
      }
      return true;
    };

    const bottomIsValidPosition = (size, x, y) => {
      for (let i = 0; i < size + 1; i++) {
        if (board[x][y + 1] === 1) return false;
      }
      return true;
    };

    ships.forEach(ship => {

    });
  };

  return { board, placeShips };
};

export default gameBoard;
