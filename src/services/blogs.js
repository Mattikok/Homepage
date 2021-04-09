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
      id: 1, title: 'test', author: 'yours truly', body: 'This is just a test blog', likes: 1,
    }];
  });
  return response;
};

const handleLike = async ({ id }) => {
  const config = {
    type: 'like',
    id,
    token,
  };
  const response = await axios.post(baseUrl, config);
  return response.data;
};

export default { handleLike, getAll, setToken };
