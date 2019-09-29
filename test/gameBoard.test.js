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
