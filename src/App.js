import { useState } from "react";
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

  return (
    <main>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Filter tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} setTasks={setTasks} />
      ) : (
        <h1 style={{ color: "#008d9e" }}>No more tasks</h1>
      )}
    </main>
  );
}

export default App;
