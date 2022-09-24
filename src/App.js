import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/scss/main.scss';
import HomePage from './pages/HomePage';
import Layout from './components/Layout'


function App() {
  return (
    <Layout>
      <Routes >
        <Route path="/" element={<HomePage />} />
      </Routes >
    </Layout>
  );
}

export default App;
