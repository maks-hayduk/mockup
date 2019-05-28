import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoApp from './TodoComponents/Todo';
import { IState } from './interfaces';
import { addTodo, toggleTodo, filterTodo } from './actions';

interface IPropsToProps {
  todos: IState[];
  visabilityFilter: string;
}

const mapStateToProps = (state: IPropsToProps) => ({
  todos: state.todos,
  visabilityFilter: state.visabilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addTodo,
  toggleTodo,
  filterTodo
}, dispatch);

const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default Todo;
