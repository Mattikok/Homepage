import { React, useState } from 'react';
import blogService from '../../services/blogs';

function LikeButton({ blog }) {
  const [likes, setLikes] = useState(blog.likes);
  const handleClick = (event) => {
    event.preventDefault();
    blogService.handleLike(blog)
      .then((res) => setLikes(res.likes))
      .catch((error) => console.log(error));
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
