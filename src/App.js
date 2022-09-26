import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/scss/main.scss';
import HomePage from './pages/HomePage';
import OneJoke from './pages/OneJoke';
import Layout from './components/Layout'


function App() {
  return (
    <Layout>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/:jokeId" element={<OneJoke />} />
      </Routes >
    </Layout>
  );
}

export default App;
