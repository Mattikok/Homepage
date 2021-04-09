import React from 'react';
import LikeButton from './LikeButton';

function Blog({
  title, author, body, id, likes,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <br />
      <p>{body}</p>
      <LikeButton key={id} likes={likes} />
    </div>
  );
}

export default Blog;
