import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { persistStore } from "redux-persist";
 
//Testing
import { createMylistedVideo } from './actions/mylist_actions';


document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store;



  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  let persistor = persistStore(store);

  //Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createMylistedVideo = createMylistedVideo;

  ReactDOM.render(<Root persistor={persistor} store={store} />, root);

})