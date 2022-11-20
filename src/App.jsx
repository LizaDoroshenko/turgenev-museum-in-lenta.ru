import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import News from './components/News/News';
import Advert from './components/Advert/Advert';


function App() {

  // useEffect(() => {
  //   fetch("http://turgenevmus.ru/wp-json/wp/v2/posts")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //     console.log(result)
  //       }
  //     )
  // }, [])

  return (
    <div className="App">
      {/* <div className='layout'>Нвости ООГЛМ И.И. Тургенева</div> */}
      <Header></Header>
      {/* <div className='advert'>РЕКЛАМА</div> */}
      <Advert></Advert>
      {/* <div className='news'>nnn
      <Post></Post>
      </div> */}
      <News></News>
    </div>
  );
}

export default App;
