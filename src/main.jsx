import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './features/HomePage/HomePage'
import ResponsiveAppBar from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from "./constants/routes";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes className="main-container">
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
