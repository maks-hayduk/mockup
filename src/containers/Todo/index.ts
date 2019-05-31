import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TodoApp from './Todo';
import { 
  addTodo,
  toggleTodo,
  filterTodo,
  selectVisabilityFilter,
  selectFilteredTodos,
} from '../../store/domains/todo';
import { IStateToProps } from '../../types';

const mapStateToProps = (state: IStateToProps) => ({
  visabilityFilter: selectVisabilityFilter(state),
  visableTodos: selectFilteredTodos(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addTodo,
  toggleTodo,
  filterTodo
}, dispatch);

const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default Todo;
