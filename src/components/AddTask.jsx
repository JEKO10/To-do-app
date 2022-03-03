import { useState } from "react";

function AddTask({ tasks, setTasks }) {
  const [query, setQuery] = useState("");

  const addTask = (text) => {
    if (!text) {
      alert("Please Add Task");
      return;
    }

    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, text };
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
