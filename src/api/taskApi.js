import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // আপনার ব্যাকেন্ড URL এখানে দিন
});

export const fetchTasks = () => api.get('/tasks').then(res => res.data);
export const createTask = (newTask) => api.post('/tasks', newTask).then(res => res.data);
export const updateTaskStatus = ({ id, status }) => api.patch(`/tasks/${id}`, { status });