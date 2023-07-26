import React, { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch(console.error);
  }, []);
  return (
    <div className="container">
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="list">
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>
                <span className="todo">{todo.todo}</span>
                <span class="material-symbols-outlined">
                  check_box_outline_blank
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
