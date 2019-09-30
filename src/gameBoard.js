/* eslint-disable no-plusplus */
import randomWholeNUmberBetween from './utilities';

const gameBoard = () => {
  const board = Array.from(Array(10), () => Array(10).fill(0));

  const placeShips = (ships) => {
    const leftIsValidPosition = (size, x, y) => {
      if (y - size < 0
        || (board[x][y - size] === 1)
        || (y + 1 <= 9 && board[x][y + 1] === 1)
        || (x - 1 >= 0 && board[x - 1][y] === 1)
        || (x + 1 <= 9 && board[x + 1][y] === 1)) return false;

      for (let i = 0; i < size; i++) {
        if ((board[x][y - i] === 1)
          || (x - 1 >= 0 && board[x - 1][y - i] === 1)
          || (x + 1 <= 9 && board[x + 1][y - i] === 1)) return false;
      }
      return true;
    };

    const rightIsValidPosition = (size, x, y) => {
      if (y + size > 9
        || (board[x][y + size] === 1)
        || (y - 1 >= 0 && board[x][y - 1] === 1)
        || (x - 1 >= 0 && board[x - 1][y] === 1)
        || (x + 1 <= 9 && board[x + 1][y] === 1)) return false;

      for (let i = 0; i < size; i++) {
        if ((board[x][y + i] === 1)
          || (x - 1 >= 0 && board[x - 1][y + i] === 1)
          || (x + 1 <= 9 && board[x + 1][y + i] === 1)) return false;
      }
      return true;
    };

    const topIsValidPosition = (size, x, y) => {
      if (x - size < 0
        || (board[x - size][y] === 1)
        || (x + 1 <= 9 && board[x + 1][y] === 1)
        || (y - 1 >= 0 && board[x][y - 1] === 1)
        || (y + 1 <= 9 && board[x][y + 1] === 1)) return false;

      for (let i = 0; i < size; i++) {
        if ((board[x - i][y] === 1)
          || (y - 1 >= 0 && board[x - i][y - 1] === 1)
          || (y + 1 <= 9 && board[x - i][y + 1] === 1)) return false;
      }
      return true;
    };

    const bottomIsValidPosition = (size, x, y) => {
      if (x + size > 9
        || (board[x + size][y] === 1)
        || (x - 1 >= 0 && board[x - 1][y] === 1)
        || (y - 1 >= 0 && board[x][y - 1] === 1)
        || (y + 1 <= 9 && board[x][y + 1] === 1)) return false;

      for (let i = 0; i < size; i++) {
        if ((board[x + i][y] === 1)
          || (y - 1 >= 0 && board[x + i][y - 1] === 1)
          || (y + 1 <= 9 && board[x + i][y + 1] === 1)) return false;
      }
      return true;
    };

    const addShipToLeft = (size, x, y) => {
      for (let i = 0; i < size; i++) {
        board[x][y - i] = 1;
      }
    };

    const addShipToRight = (size, x, y) => {
      for (let i = 0; i < size; i++) {
        board[x][y + i] = 1;
      }
    };

    const addShipToTop = (size, x, y) => {
      for (let i = 0; i < size; i++) {
        board[x - i][y] = 1;
      }
    };

    const addShipToBottom = (size, x, y) => {
      for (let i = 0; i < size; i++) {
        board[x + i][y] = 1;
      }
    };

    ships.forEach((ship) => {
      let x = randomWholeNUmberBetween(0, 9);
      let y = randomWholeNUmberBetween(0, 9);
      let status = true;
      let isHorizontal = true;

      while (status) {
        if (isHorizontal) {
          if ((x > 5) && leftIsValidPosition(ship.size, x, y)) {
            addShipToLeft(ship.size, x, y);
            status = false;
          } else if ((x <= 5) && rightIsValidPosition(ship.size, x, y)) {
            addShipToRight(ship.size, x, y);
            status = false;
          } else {
            x = randomWholeNUmberBetween(0, 9);
            y = randomWholeNUmberBetween(0, 9);
          }
          isHorizontal = false;
        } else if (!isHorizontal) {
          if ((y > 5) && (topIsValidPosition(ship.size, x, y))) {
            addShipToTop(ship.size, x, y);
            status = false;
          } else if ((y <= 5) && (bottomIsValidPosition(ship.size, x, y))) {
            addShipToBottom(ship.size, x, y);
            status = false;
          } else {
            x = randomWholeNUmberBetween(0, 9);
            y = randomWholeNUmberBetween(0, 9);
          }
          isHorizontal = true;
        }
      }
    });
  };

  return { board, placeShips };
};

export default gameBoard;
