import React from "react";
import Header from "./components/Header";
import Square from "./components/Square";
import checkWinner from "./game.service";

function App() {
  const [board, setBoard] = React.useState(Array(9).fill(""));
  const [turn, setTurn] = React.useState("X");
  const [winner, setWinner] = React.useState("");

  const handleClick = (i) => {
    if (winner) {
      return;
    }

    const newBoard = [...board];

    if (newBoard[i] === "") {
      newBoard[i] = turn;
      setBoard(newBoard);

      if (checkWinner(newBoard, turn)) {
        setWinner(turn);
      } else {
        setTurn((prev) => (prev === "X" ? "O" : "X"));
      }
    }
  };

  return (
    <>
      {/* TODO: Use the Winner state to announce the winner in the header. */}
      <Header />
      <main className="main">
        {board.map((mark, index) => (
          <Square
            mark={mark}
            key={index}
            clickHandler={handleClick}
            index={index}
          />
        ))}
      </main>
    </>
  );
}

export default App;
