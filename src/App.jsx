import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import NewTodo from './page/NewTodo';
import Details from './page/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewTodo />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App