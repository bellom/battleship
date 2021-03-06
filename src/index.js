import './style.css';
import ship from './ship';
import gameBoard from './gameBoard';
import player from './player';
import { displayBoard, displayWinner } from './dom';
import randomWholeNUmberBetween from './utilities';

const humanPlayer = player('Human');
const computerPlayer = player('Computer');

const playerShips = [
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

const computerShips = [
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

const playerBoard = gameBoard(playerShips);
const computerBoard = gameBoard(computerShips);

playerBoard.placeShips();
computerBoard.placeShips();

const clearBoard = () => {
  const player1 = document.getElementById('player');
  const computer = document.getElementById('computer');

  player1.innerHTML = '';
  computer.innerHTML = '';
};

const displayGame = () => {
  clearBoard();
  const player1 = document.getElementById('player');
  const computer = document.getElementById('computer');

  player1.innerHTML = displayBoard(playerBoard.board);
  computer.innerHTML = displayBoard(computerBoard.board);
};


const computerPlay = (board, played) => {
  let x = randomWholeNUmberBetween(0, 9);
  let y = randomWholeNUmberBetween(0, 9);

  while (played.includes(`${x}${y}`)) {
    x = randomWholeNUmberBetween(0, 9);
    y = randomWholeNUmberBetween(0, 9);
  }

  board.receiveAttack(x, y);
  played.push(`${x}${y}`);
  displayGame();
  if (board.allShipsSunk()) displayWinner(computerPlayer);
};


const humanPlay = (board) => {
  const computer = document.getElementById('computer');
  const computerPlayedPositions = [];
  const humanPlayedPositions = [];

  const handler = (e) => {
    if (playerBoard.allShipsSunk()) computer.removeEventListener('click', handler);
    if (!humanPlayedPositions.includes(e.target.id) && !playerBoard.allShipsSunk()) {
      humanPlayedPositions.push(`${e.target.id}`);
      board.receiveAttack(e.target.id[0], e.target.id[1]);
      displayGame();
      if (board.allShipsSunk(computerBoard.board)) {
        displayWinner(humanPlayer);
        computer.removeEventListener('click', handler);
      }
      computerPlay(playerBoard, computerPlayedPositions);
    }
  };

  computer.addEventListener('click', handler);
};

displayGame();

humanPlay(computerBoard);
