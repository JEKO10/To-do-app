import { FiTrash2 } from "react-icons/fi";

function Tasks({ tasks, setTasks }) {
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };

  return (
    <section className="tasks">
      {tasks.map((task) => {
        return (
          <div className="task" key={task.id}>
            <h1>{task.text}</h1>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              <FiTrash2 />
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Tasks;
