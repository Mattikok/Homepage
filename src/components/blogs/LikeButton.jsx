import { React, useState } from 'react';
import handleLike from '../../services/blogs';

const LikeButton = ({ likes }) => {
  const [count, setCount] = useState(likes);
  const handleClick = async (event) => {
    event.preventDefault();
    const { amount } = await handleLike();
    if (amount) { setCount(amount); }
  };
  return (
    <div>
      <p>
        This blog has
        {' '}
        {count}
        {' '}
        likes
      </p>
      <button onClick={handleClick} type="button">like this blog</button>
    </div>
  );
};

export default LikeButton;
