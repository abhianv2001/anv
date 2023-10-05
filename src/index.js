import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import './index.css';
import Home from './Home';
import Practice from './Practice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/practice">Pracice</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

