import React, { useEffect, useState } from 'react';
import MainNews from '../MainNews/MainNews';
import Post from '../Post/Post';
import './News.css'

function News(props) {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("http://turgenevmus.ru/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setNews(result)
        }
      )
  }, [])

  return (
    <div className='news'>
      <div className='news__posts'>
      {news.map(el => (
        <Post key={el.id} post={el}></Post>
      ))}
      </div>
      <MainNews></MainNews>
      </div>
  );
}

export default News;