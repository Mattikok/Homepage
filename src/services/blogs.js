/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  const response = request.then((res) => (res.data)).catch((error) => {
    console.log(error);
    return [{
      id: 1, title: 'test', author: 'yours truly', body: 'This is just a test blog', likes: 5,
    }];
  });
  return response;
};

const handleLike = (blog) => {
  // const config = {
  //   type: 'like',
  //   id: blog.id,
  //   token,
  // };
  // const response = await axios.post(baseUrl, config);
  // return response.data;
  const ret = blog;
  ret.likes += 1;
  return ret;
};

export default { handleLike, getAll, setToken };
