import React from 'react';
import './Post.css'

function Post({ post }) {
  
  //получаем заголовок с преобразованными спецсимволами
  const title = post.title.rendered.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode));

  return (
    <div className='post'>
      <a className='post__title' href={post.link}>{title}</a>
      <p className='post__date'>{post.date.replace('T',' ')}</p>
    </div>
  );
}

export default Post;