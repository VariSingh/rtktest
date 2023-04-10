import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { CssBaseline } from '@mui/material'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <CssBaseline />
  <Router>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
</Provider>
);


