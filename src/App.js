import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Grid from './pages/Grid';
import Results from './pages/Results';
import UnderConstruction from './pages/UnderConstruction';
import Files from './pages/Files'
import Home from './pages/Home'
import Layout from './Layout'
import useAnalytics from './analytics';
import Charts from './pages/Charts';


function App() {
  useAnalytics();
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grid" element={<Grid />} />
          <Route path="files" element={<Files />} />
          <Route path="stats" element={<Charts />} />
          <Route path="underconstruction" element={<UnderConstruction />} />
          <Route path="booster-controlla-i-risultati-pio-ladro-2022" element={<Results />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
  );
}

export default App;
