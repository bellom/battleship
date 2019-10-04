import ship from './ship';
import gameBoard from './gameBoard';
import displayBoard from './dom';
import player from './player';

const gameLogic = (() => {
  const humanPlayer = player('Human', false);
  const computerPlayer = player('Computer', true);

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

  const displayGame = () => {
    const player1 = document.getElementById('player');
    const computer = document.getElementById('computer');

    playerBoard.placeShips();
    computerBoard.placeShips();

    playerBoard.board[playerShips[0].coordinates[0][0]][playerShips[0].coordinates[0][1]] = 2;
    playerBoard.board[playerShips[0].coordinates[1][0]][playerShips[0].coordinates[1][1]] = 3;

    player1.innerHTML = displayBoard(playerBoard.board);
    computer.innerHTML = displayBoard(computerBoard.board);
  };

  return {
    displayGame,
  };
})();


export default gameLogic;
