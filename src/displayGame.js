import ship from './ship';
import gameBoard from './gameBoard';
import displayBoard from './dom';

const displayGame = () => {
  const player = document.getElementById('player');
  const computer = document.getElementById('computer');

  const shipsOne = [
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

  const shipsTwo = [
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

  const boardOne = gameBoard(shipsOne);
  const boardTwo = gameBoard(shipsTwo);

  boardOne.placeShips();
  boardTwo.placeShips();

  player.innerHTML = displayBoard(boardOne.board);
  computer.innerHTML = displayBoard(boardOne.board);

  return {
    boardOne,
    boardTwo,
    shipsOne,
    shipsTwo,
  };
};

export default displayGame;
