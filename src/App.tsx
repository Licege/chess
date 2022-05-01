import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import './App.css';

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
