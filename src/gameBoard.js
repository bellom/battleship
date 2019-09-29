/* eslint-disable no-plusplus */

const gameBoard = () => {
  const board = [];

  for (let index = 0; index < 10; index++) {
    board.push(Array(10).fill(0));
  }

  const placeShip = () => { };

  return { board, placeShip };
};

export default gameBoard;
