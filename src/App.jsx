import React from "react";
import Header from "./components/Header";
import Square from "./components/Square";

function App() {
  const [board, setBoard] = React.useState(Array(9).fill("X"));

  return (
    <>
      <Header />
      <main className="main">
        {board.map((mark, index) => (
          <Square mark={mark} key={index} />
        ))}
      </main>
    </>
  );
}

export default App;
