import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteItem = (id) => {
    const filterTasks = tasks.filter((item) => {
      const index = tasks.indexOf(item);
      return index !== id;
    });
    setTasks(filterTasks);
  };

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
              <li>
                {item}
                <button
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  <MdDelete />
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
