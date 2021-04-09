import { React, useState, useEffect } from 'react';
import Blog from './Blog';
import blogService from '../../services/blogs';

function Bloglist() {
  const [data, setData] = useState({ blogs: [] });
  useEffect(() => {
    const fetchData = async () => {
      blogService
        .getAll()
        .then((resp) => {
          console.log(`${JSON.stringify(resp)} eikun täällä`);
          setData(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const blogs = () => (data.blogs.map((blog) => <Blog key={blog.id} blog={blog} />));

  const noBlogs = () => (<p>There are no blogs to show :(</p>);

  return (
    <div>
      {(data.blogs.length > 0) ? blogs() : noBlogs()}
    </div>
  );
}

export default Bloglist;
