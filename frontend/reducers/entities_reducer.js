import { combineReducers } from 'redux';

import userReducer from "./user_reducer";
import profileReducer from "./profile_reducer";
import videoReducer from './videos_reducer';
import mylistReducer from './mylist_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  profiles: profileReducer,
  videos: videoReducer,
  mylists: mylistReducer,
})

export default entitiesReducer;