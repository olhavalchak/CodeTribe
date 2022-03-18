import { userTypes } from '../types';

const initialState = {
  data: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_INFO: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case userTypes.SET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
