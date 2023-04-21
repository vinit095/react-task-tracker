import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  const taskTime = task.day ? new Date(task.day) : new Date();
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{taskTime.toLocaleString()}</p>
    </div>
  );
};

export default Task;
