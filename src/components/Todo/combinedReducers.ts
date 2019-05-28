import { combineReducers } from 'redux';
import todos from './reducers/todosReducer';
import visabilityFilter from './reducers/visabilityFilter';

export default combineReducers({
  todos,
  visabilityFilter
});
