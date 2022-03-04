import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Make bed",
    },
    {
      id: 1,
      text: "Take a bath",
    },
    {
      id: 2,
      text: "Work out",
    },
  ]);

  return (
    <main>
      <AddTask tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} setTasks={setTasks} />
      ) : (
        <h1>No more tasks</h1>
      )}
    </main>
  );
}

export default App;
