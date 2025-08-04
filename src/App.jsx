import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import NewTodo from './page/NewTodo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewTodo />} />
    </Routes>
  );
}

export default App