import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();

  //Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>React is working</h1>, root);

})