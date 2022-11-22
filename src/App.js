import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from './pages/Grid';
import Files from './pages/Files'
import Home from './pages/Home'
import Layout from './Layout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grid" element={<Grid />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
