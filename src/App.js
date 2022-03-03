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
    <>
      <AddTask />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
