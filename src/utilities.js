/* eslint-disable no-plusplus */

const randomWholeNUmberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomBoolean = Math.random() >= 0.5;

export { randomWholeNUmberBetween, randomBoolean };
