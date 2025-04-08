import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

export const createTask = (task) => axios.post(API_URL, task);
export const getTasks = () => axios.get(API_URL).then((res) => res.data);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
