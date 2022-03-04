import { useState } from "react";

function Filters({ tasks, setTasks }) {
  const [active, setActive] = useState(true);
  const [activeCompleted, setCompleted] = useState(false);
  const [activeUncompleted, setUncompleted] = useState(false);

  return (
    <section className="filter">
      <button
        className={active ? "active" : ""}
        onClick={() => {
          setTasks(tasks);
          setActive(true);
          setCompleted(false);
          setUncompleted(false);
        }}
      >
        All
      </button>
      <button
        className={activeCompleted ? "active" : ""}
        onClick={() => {
          setActive(false);
          setCompleted(true);
          setUncompleted(false);
        }}
      >
        Completed
      </button>
      <button
        className={activeUncompleted ? "active" : ""}
        onClick={() => {
          setActive(false);
          setCompleted(false);
          setUncompleted(true);
        }}
      >
        Uncompleted
      </button>
    </section>
  );
}

export default Filters;
