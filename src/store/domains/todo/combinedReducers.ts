import { combineReducers } from 'redux';
import todos from './reducers/todosReducer';
import visabilityFilter from './reducers/visabilityReducer';

export default combineReducers({
  todos,
  visabilityFilter
});
