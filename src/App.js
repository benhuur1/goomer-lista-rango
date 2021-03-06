import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';
import Cardapio from './Components/Cardapio';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio/*" element={<Cardapio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
