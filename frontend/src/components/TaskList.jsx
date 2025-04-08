import { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../services/task';
import TaskItem from './TaskItem';
import styles from '../styles/Task.module.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      alert('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this task?')) {
      try {
        await deleteTask(id);
        fetchTasks();
      } catch (error) {
        alert('Failed to delete task');
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
