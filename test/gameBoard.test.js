/* eslint-disable no-undef */


import gameBoard from '../src/gameBoard';
import ship from '../src/ship';

test('returns a board of length 10', () => {
  const newBoard = gameBoard();
  expect(newBoard.board.length).toBe(10);
});

test('returns a board of height 10', () => {
  const newBoard = gameBoard();
  expect(newBoard.board[0].length).toBe(10);
});

test('places ships successfully', () => {
  let count = 0;
  const ships = [
    ship(4),
    ship(3),
    ship(3),
    ship(2),
    ship(2),
    ship(2),
    ship(1),
    ship(1),
    ship(1),
    ship(1),
  ];

  const board1 = gameBoard(ships);

  board1.placeShips();
  board1.board.forEach((row) => {
    count += row.filter((col) => col === 1).length;
  });

  expect(count).toBe(20);
});

test('hits the ship successfuly when attacked at a ship coordinate', () => {
  const ships = [ship(3), ship(4)];
  const board1 = gameBoard(ships);

  board1.placeShips();
  board1.receiveAttack(ships[1].coordinates[0][0], ships[1].coordinates[0][1]);

  expect(ships[1].hits.length).toBe(1);
  expect(
    board1.receiveAttack(ships[0].coordinates[0][0],
      ships[0].coordinates[0][1]),
  ).toBeTruthy();
});

test('misses when attacked on an empty coordinate', () => {
  const ships = [ship(4)];
  const board = gameBoard(ships);

  board.receiveAttack(1, 1);
  expect(ships[0].hits.length).toBe(0);
  expect(board.receiveAttack(0, 0)).toBeFalsy();
});

test('are all sunk', () => {
  const ships = [ship(4), ship(2), ship(3)];
  const board = gameBoard(ships);
  board.placeShips();

  ships.forEach((sh) => {
    sh.coordinates.forEach((coordinate) => {
      board.receiveAttack(coordinate[0], coordinate[1]);
    });
  });

  expect(board.isAllSunk()).toBeTruthy();
});

test('are not all sunk', () => {
  const ships = [ship(4), ship(2), ship(3)];
  const board = gameBoard(ships);
  board.placeShips();

  ships[1].coordinates.forEach((coordinate) => {
    board.receiveAttack(coordinate[0], coordinate[1]);
  });

  expect(board.isAllSunk()).toBeFalsy();
});
