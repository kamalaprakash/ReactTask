import uuidv4 from 'uuid/v4';
import { ADD_POST, DELETE_POST } from './types';

export const createPost = ({  name,email, password }) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    name,
    email,
    password
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});