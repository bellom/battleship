import './style.css';
import ship from './ship';
import gameBoard from './gameBoard';
import player from './player';
import { displayBoard, displayWinner } from './dom';
import randomWholeNUmberBetween from './utilities';

const humanPlayer = player('Human', false);
const computerPlayer = player('Computer', true);

const playerShips = [
  // ship(4),
  // ship(3),
  // ship(3),
  // ship(2),
  ship(2),
  // ship(2),
  // ship(1),
  // ship(1),
  // ship(1),
  ship(1),
];

const computerShips = [
  // ship(4),
  // ship(3),
  // ship(3),
  // ship(2),
  // ship(2),
  ship(2),
  // ship(1),
  // ship(1),
  // ship(1),
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

const checkWin = (board) => {
  let count = 0;

  board.forEach((row) => {
    count += row.filter((val) => val === 2).length;
  });
  return count === 3;
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
  if (checkWin(playerBoard.board)) displayWinner(computerPlayer.name);
};


const humanPlay = (board) => {
  const computer = document.getElementById('computer');
  const computerPlayedPositions = [];
  const humanPlayedPositions = [];

  computer.addEventListener('click', (e) => {
    if (!humanPlayedPositions.includes(e.target.id)) {
      humanPlayedPositions.push(`${e.target.id}`);
      board.receiveAttack(e.target.id[0], e.target.id[1]);
      displayGame();
      if (checkWin(computerBoard.board)) displayWinner(humanPlayer.name);
      computerPlay(playerBoard, computerPlayedPositions);
    }
  });
};

displayGame();

humanPlay(computerBoard);
