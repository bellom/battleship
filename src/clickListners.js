import gameLogic from './displayGame';

const clickListeners = () => {
  const randomize = document.getElementById('randomize');

  const rearrange = () => {
    // gameLogic.displayGame();
  };

  randomize.addEventListener('click', rearrange, false);
};



export default clickListeners;

