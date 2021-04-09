import { React, useState } from 'react';
import blogService from '../../services/blogs';

function LikeButton({ blog }) {
  const [likes, setLikes] = useState(blog.likes);
  const handleClick = (event) => {
    event.preventDefault();
    setLikes(blogService.handleLike(blog).likes);
  };
  return (
    <div>
      <p>
        This blog has
        {' '}
        {likes}
        {' '}
        likes
      </p>
      <button onClick={handleClick} type="button">like this blog</button>
    </div>
  );
}

export default LikeButton;
