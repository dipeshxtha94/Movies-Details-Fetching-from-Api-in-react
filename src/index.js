import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDetails from './components/moviesDetails';
import Form from './components/form';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/:MoviesDetails' element={<MoviesDetails />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
