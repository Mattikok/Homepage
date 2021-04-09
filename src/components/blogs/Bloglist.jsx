import { React, useState, useEffect } from 'react';
import Blog from './Blog';
import blogService from '../../services/blogs';

function Bloglist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        blogService
          .getAll()
          .then((response) => setData(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const blogs = () => (data.map((blog) => <Blog key={blog.id} blog={blog} />));

  const noBlogs = () => (<p>There are no blogs to show :(</p>);

  return (
    <div>
      {(data.length > 0) ? blogs() : noBlogs()}
    </div>
  );
}

export default Bloglist;
