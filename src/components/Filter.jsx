function Filters({ status, setStatus }) {
  const statusTasks = (e) => {
    setStatus(e.target.textContent);
  };

  return (
    <section className="filter">
      <button
        className={status === "All" ? "active" : ""}
        onClick={statusTasks}
      >
        All
      </button>
      <button
        className={status === "Completed" ? "active" : ""}
        onClick={statusTasks}
      >
        Completed
      </button>
      <button
        className={status === "Uncompleted" ? "active" : ""}
        onClick={statusTasks}
      >
        Uncompleted
      </button>
    </section>
  );
}

export default Filters;
