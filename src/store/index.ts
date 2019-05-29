import { createStore } from 'redux';
import todoApp from './domains/todo/combinedReducers';

const store = createStore(todoApp);

export default store;
