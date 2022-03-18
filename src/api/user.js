import axios from 'axios';
import { root } from './config';

export const user = Object.freeze({
  getUserInfo:  (info) => axios.get(`${root}/users?${info.input}=${info.inputText}`),
});
