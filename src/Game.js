import { useState } from "react";
import { Button } from "@mui/material";

export function Game() {
  return <GameEngine />;
}
function GameEngine() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [Xturn, setXturn] = useState(true);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
      }
    }
  };
  const handleClick = (index) => {
    console.log(index);
    if (board[index] == null) {
      const boardCopy = [...board];
      boardCopy[index] = Xturn ? "X" : "O";
      setBoard(boardCopy);
      setXturn(!Xturn);
    }
  };
  return (
    <div className="box-div">
      {board.map((val, index) => (
        <Tictac val={val} onPlayerClick={() => handleClick(index)} />
      ))}
    </div>
  );
}
function Tictac({ val, onPlayerClick }) {
  // const [value, setValue] = useState(null);
  const style = {
    fontSize: 20,
    color: val == "X" ? "red" : "green",
  };
  return (
    <div className="table">
      <Button variant="text" style={style} onClick={onPlayerClick}>
        {val}
      </Button>
    </div>
  );
}
