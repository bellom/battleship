/* eslint-disable no-plusplus */

const displayBoard = (board) => {
  const nums = ['', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const div = document.createElement('div');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const iconsDiv = document.createElement('div');
  iconsDiv.classList.add('text-center', 'mb-3', 'icons');

  const tr = document.createElement('tr');
  table.classList.add('text-center', 'mb-3');

  nums.forEach((num) => {
    const th = document.createElement('th');
    if (num === '') th.classList.add('empty');
    th.innerText = num;
    tr.appendChild(th);
  });

  thead.appendChild(tr);

  for (let row = 0; row < board.length; row++) {
    const i = document.createElement('i');
    i.classList.add('material-icons');
    i.innerText = 'directions_boat';
    iconsDiv.appendChild(i);

    const trow = document.createElement('tr');
    const th = document.createElement('th');
    trow.appendChild(th);
    th.innerText = letters[row];
    for (let col = 0; col < board[row].length; col++) {
      const td = document.createElement('td');
      if (board[row][col] === 1) {
        td.classList.add('ship');
        td.classList.add('hover');
      } else if (board[row][col] === 2) {
        td.classList.add('hit');
      } else if (board[row][col] === 3) {
        td.classList.add('miss');
      } else {
        td.classList.add('hover');
      }
      td.id = `${row}${col}`;
      trow.appendChild(td);
    }
    tbody.appendChild(trow);
  }

  div.appendChild(iconsDiv);
  table.appendChild(thead);
  table.appendChild(tbody);
  div.appendChild(table);
  return div.innerHTML;
};

const displayWinner = (name) => {
  const alert = document.getElementById('alert');
  alert.classList.add('alert', 'alert-success');
  alert.innerText = `${name} Wins!`;
};

export { displayBoard, displayWinner };
