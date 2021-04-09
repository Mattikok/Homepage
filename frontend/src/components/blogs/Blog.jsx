import React from 'react';
import LikeButton from './LikeButton';

function Blog({ blog }) {
  return (
    <div>
      <h1>
        {blog.title}
      </h1>
      <h2>
        {blog.author}
      </h2>
      <br />
      <p>
        {blog.body}
      </p>
      <LikeButton key={blog.id} blog={blog} />
    </div>
  );
}

export default Blog;
