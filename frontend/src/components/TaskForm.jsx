import { useState } from 'react';
import styles from '../styles/Task.module.css';

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');
    onTaskAdded({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          ADD
        </button>
      </div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        className={styles.input}
      />
    </form>
  );
}
