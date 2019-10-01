/* eslint-disable no-undef */
import ship from '../src/ship';

test('is hit', () => {
  const testShip = ship(6);
  testShip.hit(1);
  expect(testShip.hits.length).toBe(1);
});

test('is sunk', () => {
  const testShip = ship(1);
  testShip.hit(3);
  expect(testShip.isSunk()).toBeTruthy();
});

test('is not sunk', () => {
  const testShip = ship(1);
  expect(testShip.isSunk()).toBeFalsy();
});

test('all ship are sunk', () => {
  const testShip = ship(0);
  expect(testShip.allSunk()).toBeTruthy();
});