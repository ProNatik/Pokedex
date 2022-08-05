import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/banner';
import Home from './views/home';
import PokemonDetails from './views/pokemonDetails';
import Pokedex from './views/pokedex';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
    <div className="App" >
      <Banner />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemonDetails/:id" element={<PokemonDetails />} />
          <Route path="/pokedex" element={<Pokedex />} /> 
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
