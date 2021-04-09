/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  const response = request.then((res) => {
    console.log(`${JSON.stringify(res)} vai täällä sittenkin`);
    return {
      blogs: [{
        id: 1, title: 'test', author: 'yours truly', body: 'This is just a test blog', likes: 5,
      }, {
        id: 2, title: 'test2', author: 'yours truly still', body: 'This is just another test blog', likes: 10,
      }],
    };
  })
    .catch((error) => {
      console.log(`${error} täällä`);
      return {
        blogs: [{
          id: 1, title: 'test', author: 'yours truly', body: 'This is just a test blog', likes: 5,
        }, {
          id: 2, title: 'test2', author: 'yours truly still', body: 'This is just another test blog', likes: 10,
        }],
      };
    });
  return response;
};

const handleLike = (blog) => {
  const config = {
    type: 'like',
    id: blog.id,
    token,
  };
  const response = axios.post(baseUrl, config);
  return response
    .then((res) => {
      console.log(JSON.stringify(res));
      const ret = blog;
      ret.likes += 1;
      return ret;
    })
    .catch((error) => {
      console.log(error);
      const ret = blog;
      ret.likes += 1;
      return ret;
    });
};

export default { handleLike, getAll, setToken };
