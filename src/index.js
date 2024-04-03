import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{ BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import CategoryContextProvider from './contexts/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryContextProvider>
      <App />
    </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
