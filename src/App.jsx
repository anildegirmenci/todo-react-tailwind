import React from 'react';
import './App.css'
import Header from './components/Header'
import CreateTask from './components/CreateTask'

function App() {


  return (
    <div className='h-screen bg-gray-100'>
      <Header />
      <CreateTask />
    </div>
  )
}

export default App
