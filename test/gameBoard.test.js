/* eslint-disable arrow-parens */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */

import gameBoard from '../src/gameBoard';

test('returns a board of length 10', () => {
  const newBoard = gameBoard();
  expect(newBoard.board.length).toBe(10);
});

test('returns a board of height 10', () => {
  const newBoard = gameBoard();
  expect(newBoard.board[0].length).toBe(10);
});

test('places ships successfully', () => {
  const ship1 = { size: 1 };
  const ship2 = { size: 2 };
  const ship3 = { size: 3 };
  const ship4 = { size: 4 };

  let count = 0;
  const ships = [ship1, ship1, ship1, ship1, ship2, ship2, ship2, ship3, ship3, ship4];

  const board1 = gameBoard();

  board1.placeShips(ships);
  board1.board.forEach(row => {
    count += row.filter(col => col === 1).length;
  });

  console.log(board1);

  expect(count).toBe(20);
});
