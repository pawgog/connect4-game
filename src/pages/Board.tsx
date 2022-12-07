import { useState } from 'react';
import { Button } from '@mui/material';
import Row from '../components/Row';
import usePreviousState from '../hooks/usePreviousState';
import { checkAll, checkGameResult, cloneBoard } from '../utils/helpers';
import { TGameObject } from '../utils/types';
import { staticText } from '../utils/staticText';
import { initialGameDetails } from '../utils/staticValue';
import * as S from './Board.styled';

const Board = () => {
  const [gameDetails, setGameDetails] =
    useState<TGameObject>(initialGameDetails);
  const { currentPlayer, winner, board, gameOver, message } = gameDetails;
  const previousValue = usePreviousState(gameDetails);

  const playGame = (cell: number) => {
    if (!gameOver) {
      let boardGame = cloneBoard(board);

      for (let row = 5; row >= 0; row--) {
        if (!boardGame[row][cell]) {
          boardGame[row][cell] = currentPlayer;
          break;
        }
      }

      let result = checkAll(boardGame);
      const gameResult = checkGameResult(currentPlayer, result);

      setGameDetails((prevState) => ({
        ...prevState,
        ...gameResult,
        board: boardGame,
      }));
    } else {
      setGameDetails((prevState) => ({
        ...prevState,
        message: staticText.gameOver,
      }));
    }
  };

  const newGame = () => {
    setGameDetails(initialGameDetails);
  };

  const backGame = () => {
    setGameDetails(previousValue);
  };

  return (
    <S.BoardStyle>
      <S.ButtonBoardStyle>
        <Button variant="outlined" color="info" onClick={newGame}>
          {staticText.newGame}
        </Button>
        <Button variant="outlined" color="warning" onClick={backGame}>
          {staticText.backGame}
        </Button>
      </S.ButtonBoardStyle>
      <table>
        <tbody>
          {board.map((row, i) => (
            <Row key={i} row={row} playGame={playGame} />
          ))}
        </tbody>
      </table>
      <S.MessageBoardStyle>
        <S.MessageStyle $winner={winner}>{message}</S.MessageStyle>
      </S.MessageBoardStyle>
    </S.BoardStyle>
  );
};

export default Board;
