import { useState, useRef } from "react";

function AddTask({ tasks, setTasks }) {
  const [query, setQuery] = useState("");
  const input = useRef();

  const addTask = (text) => {
    if (!text) {
      input.current.placeholder = "Type something!";
      setTimeout(() => {
        input.current.placeholder = "New task";
      }, 1500);
      return;
    }

    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, text, completed: false };
    setTasks([...tasks, newTask]);
    setQuery("");
  };

  return (
    <section className="addTask">
      <input
        type="text"
        placeholder="New Task"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={input}
      />
      <button
        onClick={() => {
          addTask(query);
        }}
      >
        Add
      </button>
    </section>
  );
}

export default AddTask;
