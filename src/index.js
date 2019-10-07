import './style.css';
import ship from './ship';
import gameBoard from './gameBoard';
// import player from './player';
import displayBoard from './dom';
import randomWholeNUmberBetween from './utilities';

// const humanPlayer = player('Human', false);
// const computerPlayer = player('Computer', true);

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
};

// const playerWin = () => {
//   let count = 0;

//   computerBoard.board.forEach((row) => {
//     count += row.filter((val) => val === 2).length;
//   });
//   return count === 20;
// };


const humanPlay = (board) => {
  const computer = document.getElementById('computer');
  const playedPositions = [];

  computer.addEventListener('click', (e) => {
    board.receiveAttack(e.target.id[0], e.target.id[1]);
    displayGame();
    computerPlay(playerBoard, playedPositions);
    // console.log(playerWin());
    // console.log(computerBoard.allShipsSunk());
    // console.log(computerBoard.board);
  });
};

displayGame();

humanPlay(computerBoard);
