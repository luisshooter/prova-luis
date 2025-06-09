import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/post" />} />
      <Route path="/post" element={<PostList />} />
      <Route path="/dados/:id" element={<PostDetails />} />
    </Routes>
  );
};


export default App;
