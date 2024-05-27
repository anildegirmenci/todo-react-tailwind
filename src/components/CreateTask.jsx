import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [assignee, setAssignee] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://664cf463ede9a2b556523307.mockapi.io/api/v1/todos')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, status, assignee };
    axios.post('https://664cf463ede9a2b556523307.mockapi.io/api/v1/todos', newTask)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));

    setTitle('');
    setDescription('');
    setStatus('To Do');
    setAssignee('');
  };
  const handleStatusChange = (taskId, newStatus) => {
    axios.put(`https://664cf463ede9a2b556523307.mockapi.io/api/v1/todos/${taskId}`, { status: newStatus })
      .then(response => {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error updating task status:', error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Task Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Assignee</label>
            <input
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Display tasks */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-2">To Do</h3>
          {tasks.filter(task => task.status === 'To Do').map((task, index) => (
            <div key={index} className="border-b border-gray-200 pb-2 mb-2">
              <h4 className="font-semibold">{task.title}</h4>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">Assigned to: {task.assignee}</p>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-2">In Progress</h3>
          {tasks.filter(task => task.status === 'In Progress').map((task, index) => (
            <div key={index} className="border-b border-gray-200 pb-2 mb-2">
              <h4 className="font-semibold">{task.title}</h4>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">Assigned to: {task.assignee}</p>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-2">Done</h3>
          {tasks.filter(task => task.status === 'Done').map((task, index) => (
            <div key={index} className="border-b border-gray-200 pb-2 mb-2">
              <h4 className="font-semibold">{task.title}</h4>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">Assigned to: {task.assignee}</p>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateTask;