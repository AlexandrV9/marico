import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import { AboutUs } from './components/pages/AboutUs';
import { Blog } from './components/pages/Blog';
import { HomePage } from './components/pages/HomePage';
import { Pricing } from './components/pages/Pricing';
import { SignIn } from './components/pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
