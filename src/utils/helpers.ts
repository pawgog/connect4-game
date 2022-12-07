export const createInitArray = () => {
  const boardSize = 6;
  const boardTabel = [];
  const tabel = Array.from(Array(7).fill(0));
  for (let i = 0; i < boardSize; i++) {
    boardTabel.push(tabel);
  }
  return boardTabel;
};
