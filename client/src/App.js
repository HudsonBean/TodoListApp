import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Todos } from "./modules/Todos";

function App() {
  return (
    <div className="container">
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="list">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
