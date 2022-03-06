import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Make bed",
      completed: true,
    },
    {
      id: 1,
      text: "Take a bath",
      completed: false,
    },
    {
      id: 2,
      text: "Work out",
      completed: false,
    },
  ]);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);

  const filterTasks = () => {
    switch (status) {
      case "Completed":
        setFiltered(tasks.filter((task) => task.completed === true));
        break;
      case "Uncompleted":
        setFiltered(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFiltered(tasks);
        break;
    }
  };

  useEffect(() => {
    filterTasks();
  }, [status, tasks]);

  return (
    <main>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Filter
        tasks={tasks}
        setTasks={setTasks}
        status={status}
        setStatus={setStatus}
      />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          status={status}
          filtered={filtered}
        />
      ) : (
        <h1 style={{ color: "#008d9e" }}>No more tasks</h1>
      )}
    </main>
  );
}

export default App;
