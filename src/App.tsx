import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom"

import { HomePage } from './components/pages/HomePage';
import { Pricing } from './components/pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
