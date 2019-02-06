import axios from 'axios';

export const mainAxios = axios.create({
  baseURL: 'https://react-my-burger-js.firebaseio.com/',
});
