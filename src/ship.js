const ship = (size) => {
  const coordinates = [];
  const hits = [];

  const hit = (x, y) => hits.push([x, y]);

  const isSunk = () => size === hits.length;

  return {
    size,
    hit,
    hits,
    isSunk,
    coordinates,
  };
};

export default ship;
