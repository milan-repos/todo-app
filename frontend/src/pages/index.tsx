import Head from 'next/head';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { createTask } from '../services/task';
import { Task } from '../types/task';

export default function Home() {
  const handleTaskAdded = async (newTask: Omit<Task, 'id' | 'createdAt'>) => {
    try {
      await createTask(newTask);
      window.location.reload();
    } catch (error) {
      alert('Failed to add task');
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Todo App</title>
      </Head>

      <h1>Todo App</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
}
