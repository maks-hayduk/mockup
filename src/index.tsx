import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, TodoApp } from './components/Todo';
import * as serviceWorker from './serviceWorker';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
    );
}
store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
