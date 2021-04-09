import { React, useState, useEffect } from 'react';
import Blog from './Blog';
import getAll from '../../services/blogs';

const Bloglist = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const newData = getAll();
    if (newData) { setData(newData); }
  }, []);

  return (
    <div>
      {data.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Bloglist;
