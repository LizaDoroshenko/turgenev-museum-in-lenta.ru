import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import News from './components/News/News';
import Advert from './components/Advert/Advert';


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Advert></Advert>
      <News></News>
    </div>
  );
}

export default App;
