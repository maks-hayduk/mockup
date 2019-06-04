import React from 'react';
import { AddTodo, TodoList , Footer } from '../../components/Todo';
import { ITodo } from '../../store/domains/todo/interfaces';
import { uuid } from '../../utils';
import { IAddTodoAction, IToggleTodoAction, IFilterTodoAction, IGetTodosAction } from '../../store/domains/todo/actions';

interface IProps {
  visabilityFilter: string;
  visableTodos: ITodo[];
  addTodo: IAddTodoAction;
  toggleTodo: IToggleTodoAction;
  filterTodo: IFilterTodoAction;
  getTodos: IGetTodosAction;
}

class TodoApp extends React.Component <IProps> {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    const { visableTodos, visabilityFilter, addTodo, toggleTodo, filterTodo } = this.props;
    return (
      <div>
        <AddTodo onAddClick={ text => {
          const nextId = uuid();
          addTodo(text, nextId)
        }
        } />
        
        <TodoList todos={visableTodos} onTodoClick={toggleTodo} />

        <Footer visabilityFilter={visabilityFilter} onFilterClick={filterTodo} />
      </div>
    );
  }
}

export default TodoApp;
