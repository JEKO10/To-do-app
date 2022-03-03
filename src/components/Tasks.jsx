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
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Tasks;
