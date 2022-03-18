import { combineReducers } from 'redux';
import { userReducer as user} from '../reducers';

export const rootReducer = combineReducers({
  user,
});
