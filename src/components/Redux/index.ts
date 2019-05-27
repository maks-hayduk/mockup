import { combineReducers } from 'redux';
import todos from './todos';
import { visabilityFilter } from './visabilityFilter';

export default combineReducers({
  todos,
  visabilityFilter
});
