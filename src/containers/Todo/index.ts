import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TodoApp from './Todo';
import { 
  IState,
  addTodo,
  toggleTodo,
  filterTodo,
  selectTodos,
  selectVisabilityFilter 
} from '../../store/domains/todo';

interface IPropsToProps {
  todos: IState[];
  visabilityFilter: string;
}

const mapStateToProps = (state: IPropsToProps) => ({
  todos: selectTodos(state),
  visabilityFilter: selectVisabilityFilter(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addTodo,
  toggleTodo,
  filterTodo
}, dispatch);

const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default Todo;
