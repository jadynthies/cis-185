export default function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      <span className={task.completed ? "completed" : ""}>{task.text}</span>

      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}