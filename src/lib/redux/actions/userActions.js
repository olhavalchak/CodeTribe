import { api } from "../../../api";
import { userTypes } from '../types';


export const userActions = Object.freeze({
  getUserInfo: (userInfo) => ({
    type: userTypes.GET_INFO,
    payload: userInfo,
  }),
  setFetchingError: (error) => ({
    type: userTypes.SET_USER_ERROR,
    payload: error,
  }),
  getUserInfoAsync: (userInfo) => async (dispatch) => {
    try {
      const response = await api.user.getUserInfo(userInfo);
      response.data[0]
      ? dispatch(userActions.getUserInfo({...response.data[0], userInfo }))
      : dispatch(userActions.setFetchingError('error'));
    } catch (err) {
      dispatch(userActions.setFetchingError(err.message));
    }
  },
});
