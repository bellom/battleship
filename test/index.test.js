const tds = require('../src/index');

test("", () => {
 const grid = document.getElementsByTagName('td');

 expect(tds).toEqual(grid);
});