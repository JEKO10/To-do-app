import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([]);
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

  const saveToLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getFromLocal = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      const localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
  };

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    filterTasks();
    saveToLocal();
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
        <h1 style={{ color: "#008d9e", textAlign: "center" }}>
          Your list is clear!
        </h1>
      )}
    </main>
  );
}

export default App;
