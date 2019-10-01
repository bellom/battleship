const ship = (size) => {
  const coordinates = [];
  const hits = [];

  const hit = (x, y) => hits.push([x, y]);

  const isSunk = () => size === hits.length;

  const allSunk = () => size === 0;

  return {
    size,
    hit,
    hits,
    isSunk,
    allSunk,
    coordinates,
  };
};

export default ship;
