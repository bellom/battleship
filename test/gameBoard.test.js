/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
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
  const ships = [ship(1), ship(2), ship(3), ship(4)];
  const board1 = gameBoard();

  board1.placeShips(ships);
  board1.board.forEach(row => {
    count += row.filter(col => col === 1);
  });

  expect(count).toBe(10);
});
