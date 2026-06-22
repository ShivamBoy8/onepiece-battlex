import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import Game from './pages/Game';
import Cards from './pages/Cards';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/game"  element={<Game />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <Analytics />
    </>
  );
}