import { combineReducers } from 'redux';

import userReducer from "./user_reducer";
import profileReducer from "./profile_reducer";
import videoReducer from './videos_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  profiles: profileReducer,
  videos: videoReducer,
})

export default entitiesReducer;