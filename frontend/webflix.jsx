import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();

  //Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;

  ReactDOM.render(<Root store={store} />, root);

})