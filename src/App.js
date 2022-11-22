import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from './pages/Grid';
import Files from './pages/Files'
import Home from './pages/Home'
import Layout from './Layout'
import UnderConstruction from './pages/UnderConstruction';
import useAnalytics from './analytics';


function App() {
  useAnalytics();
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grid" element={<Grid />} />
          <Route path="files" element={<Files />} />
          <Route path="underconstruction" element={<UnderConstruction />} />
        </Route>
      </Routes>
  );
}

export default App;
