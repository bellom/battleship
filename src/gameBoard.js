/* eslint-disable no-plusplus */
/* eslint-disable arrow-parens */

import randomWholeNUmberBetween from './utilities';

const gameBoard = (ships) => {
  const board = Array.from(Array(10), () => Array(10).fill(0));
  const box = {
    empty: 0,
    hasShip: 1,
    hit: 2,
    miss: 3,
  };

  const placeShips = () => {
    const leftIsValidPosition = (size, x, y) => {
      if (y - size < 0
        || (board[x][y - size] === 1)
        || (x + 1 <= 9 && board[x + 1][y - size] === 1)
        || (x - 1 >= 0 && board[x - 1][y - size] === 1)
        || (y + 1 <= 9 && board[x][y + 1] === 1)
        || (y + 1 <= 9 && x - 1 >= 0 && board[x - 1][y + 1] === 1)
        || (y + 1 <= 9 && x + 1 <= 9 && board[x + 1][y + 1] === 1)
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
        || (x - 1 >= 0 && board[x - 1][y + size] === 1)
        || (x + 1 <= 9 && board[x + 1][y + size] === 1)
        || (y - 1 >= 0 && board[x][y - 1] === 1)
        || (y + 1 <= 9 && x - 1 >= 0 && board[x - 1][y - 1] === 1)
        || (y + 1 <= 9 && x + 1 <= 9 && board[x + 1][y - 1] === 1)
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
        || (y + 1 <= 9 && board[x - size][y + 1] === 1)
        || (y - 1 >= 0 && board[x - size][y - 1] === 1)
        || (x + 1 <= 9 && board[x + 1][y] === 1)
        || (x + 1 <= 9 && y + 1 <= 9 && board[x + 1][y + 1] === 1)
        || (x + 1 <= 9 && y - 1 >= 0 && board[x + 1][y - 1] === 1)
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
        || (y - 1 >= 0 && board[x + size][y - 1] === 1)
        || (y + 1 <= 9 && board[x + size][y + 1] === 1)
        || (x - 1 >= 0 && board[x - 1][y] === 1)
        || (x - 1 >= 0 && y + 1 <= 9 && board[x - 1][y + 1] === 1)
        || (x - 1 >= 0 && y - 1 >= 0 && board[x - 1][y - 1] === 1)
        || (y - 1 >= 0 && board[x][y - 1] === 1)
        || (y + 1 <= 9 && board[x][y + 1] === 1)) return false;

      for (let i = 0; i < size; i++) {
        if ((board[x + i][y] === 1)
          || (y - 1 >= 0 && board[x + i][y - 1] === 1)
          || (y + 1 <= 9 && board[x + i][y + 1] === 1)) return false;
      }
      return true;
    };

    const addShipToLeft = (ship, x, y) => {
      for (let i = 0; i < ship.size; i++) {
        board[x][y - i] = 1;
        ship.coordinates.push([x, y - i]);
      }
    };

    const addShipToRight = (ship, x, y) => {
      for (let i = 0; i < ship.size; i++) {
        board[x][y + i] = 1;
        ship.coordinates.push([x, y + i]);
      }
    };

    const addShipToTop = (ship, x, y) => {
      for (let i = 0; i < ship.size; i++) {
        board[x - i][y] = 1;
        ship.coordinates.push([x - i, y]);
      }
    };

    const addShipToBottom = (ship, x, y) => {
      for (let i = 0; i < ship.size; i++) {
        ship.coordinates.push([x + i, y]);
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
            addShipToLeft(ship, x, y);
            status = false;
          } else if ((x <= 5) && rightIsValidPosition(ship.size, x, y)) {
            addShipToRight(ship, x, y);
            status = false;
          } else {
            x = randomWholeNUmberBetween(0, 9);
            y = randomWholeNUmberBetween(0, 9);
          }
          isHorizontal = false;
        } else if (!isHorizontal) {
          if ((y > 5) && (topIsValidPosition(ship.size, x, y))) {
            addShipToTop(ship, x, y);
            status = false;
          } else if ((y <= 5) && (bottomIsValidPosition(ship.size, x, y))) {
            addShipToBottom(ship, x, y);
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

  const receiveAttack = (x, y) => {
    if (board[x][y] === box.empty) {
      board[x][y] = box.miss;
    } else if (board[x][y] === box.hasShip) {
      board[x][y] = box.hit;
      ships.forEach((ship) => {
        ship.coordinates.forEach((location) => {
          if (location[0] === x && location[1] === y) {
            ship.hit(x, y);
          }
        });
      });
    }
  };

  const totalShipSize = () => {
    let count = 0;

    ships.forEach((sh) => {
      count += sh.size;
    });

    return count;
  };

  const allShipsSunk = () => {
    let count = 0;

    board.forEach((row) => {
      count += row.filter(val => val === 2).length;
    });

    return count === totalShipSize();
  };


  return {
    board,
    placeShips,
    receiveAttack,
    allShipsSunk,
  };
};

export default gameBoard;
