import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoApp from '../components/Todo/TodoComponents/Todo';
import { IState } from '../components/Todo/interfaces';
import { addTodo, toggleTodo, filterTodo } from '../components/Todo/actions';
import { selectTodos, selectVisabilityFilter } from '../components/Todo/select';

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
