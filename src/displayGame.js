import ship from './ship';
import gameBoard from './gameBoard';
import displayBoard from './dom';

const displayGame = () => {
  const player = document.getElementById('player');
  const computer = document.getElementById('computer');

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

  player.innerHTML = displayBoard(playerBoard.board);
  computer.innerHTML = displayBoard(computerBoard.board);

  return {
    playerBoard,
    computerBoard,
    playerShips,
    computerShips,
  };
};

export default displayGame;
