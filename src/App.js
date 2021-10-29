import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <section className="add">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTasks([...tasks, inputValue]);
            setInputValue("");
            console.log(tasks);
          }}
        >
          ADD
        </button>
      </section>
      <div className="list">
        {tasks.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
