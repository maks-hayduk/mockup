import { createStore } from 'redux';
import todoApp from '../combinedReducers';

const store = createStore(todoApp);

export default store;
