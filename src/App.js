import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <section className="addTask">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {inputValue !== "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setTasks([...tasks, inputValue]);
              setInputValue("");
            }}
          >
            ADD
          </button>
        ) : (
          ""
        )}
      </section>
      <div className="list">
        {tasks.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
