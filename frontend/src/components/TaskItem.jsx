import styles from '../styles/Task.module.css';

export default function TaskItem({ task, onDelete }) {
  return (
    <div className={styles.taskItem}>
      <div>
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <small>{new Date(task.createdAt).toLocaleString()}</small>
      </div>
      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
}
