import React, { useState } from "react";

function App() {
  const [Text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newdata = event.target.value;
    setText(newdata);
  }

  function add() {
    setItems((prev) => {
      return [...prev, Text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={Text} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
