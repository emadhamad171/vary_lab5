import './App.css';
import Board from "./components/Board";
import React from "react";
import BoardHoleProvider from "./providers/boardHoleProvider";

function App() {
  return (
    <div className="App">
      <BoardHoleProvider>
        <Board/>
      </BoardHoleProvider>
    </div>
  );
}

export default App;
