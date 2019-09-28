const ship = (size) => {
  const coordinates = [];
  const hits = [];

  const hit = (coordinate) => hits.push(coordinate);

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
