import displayGame from './displayGame';

const clickListeners = () => {
  const randomize = document.getElementById('randomize');

  const rearrange = () => {
    displayGame();
  };

  randomize.addEventListener('click', rearrange, false);
};

export default clickListeners;
