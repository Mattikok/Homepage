import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.then((response) => response.data);
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
