import { combineReducers } from 'redux';

import userReducer from "./user_reducer";
import profileReducer from './profiles_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  profiles: profileReducer,
})

export default entitiesReducer;