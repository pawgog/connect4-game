import Cell from './Cell';

const Row = ({ row, playGame }: any) => {
  return (
    <tr>
      {row.map((cell: any, i: any) => (
        <Cell key={i} value={cell} columnIndex={i} playGame={playGame} />
      ))}
    </tr>
  );
};

export default Row;
