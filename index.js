import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App';
import Footer from './Footer';
import Banniere from './Banniere'

ReactDOM.render(
  <div className="App">
      <Banniere />
      <Game />
      <Footer />
  </div>,
  document.getElementById('root')
);

