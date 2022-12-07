import { useState } from 'react';
import { Button } from '@mui/material';
import Row from '../components/Row';
import { createInitArray } from '../utils/helpers';
import { staticText } from '../utils/staticText';
import * as S from './Board.styled';

const initialGameDetails = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: createInitArray(),
  gameOver: false,
  message: '',
};

const Board = () => {
  const [gameDetails, setGameDetails] = useState(initialGameDetails);
  const { board, message } = gameDetails;

  const playGame = (c: any) => {};

  return (
    <S.BoardStyle>
      <Button>{staticText.newGame}</Button>
      <table>
        <tbody>
          {board.map((row, i) => (
            <Row key={i} row={row} play={playGame} />
          ))}
        </tbody>
      </table>
      <span>{message}</span>
    </S.BoardStyle>
  );
};

export default Board;
