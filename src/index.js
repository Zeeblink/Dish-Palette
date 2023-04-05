import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import '../src/assets/main.css'
import RecipeDetails from './Components/RecipeDetails';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/recipes/:id" element={<RecipeDetails/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
