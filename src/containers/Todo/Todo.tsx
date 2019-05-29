import React from 'react';
import { AddTodo, TodoList ,Footer } from '../../components/Todo';
import { IState } from '../../store/domains/todo/interfaces';
import getVisibleTodos from '../../store/domains/todo/getVisableTodos';
import { uuid } from '../../utils';

interface IProps {
  todos: IState[];
  visabilityFilter: string;
  addTodo: (text: string, id: number) => void;
  toggleTodo: (id: number) => void;
  filterTodo: (filter: string) => void;
}

class TodoApp extends React.Component <IProps> {
  render() {
    const { todos, visabilityFilter, addTodo, toggleTodo, filterTodo } = this.props;
    const visibleTodos = getVisibleTodos(todos, visabilityFilter);
    return (
      <div>
        <AddTodo onAddClick={ text => {
          let nextId = uuid();
          addTodo(text, nextId)
        }
        } />
        
        <TodoList todos={visibleTodos} onTodoClick={toggleTodo} />

        <Footer visabilityFilter={visabilityFilter} onFilterClick={filterTodo} />
      </div>
    )
  }
}

export default TodoApp;
