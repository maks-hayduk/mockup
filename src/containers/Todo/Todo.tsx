import React from 'react';
import { AddTodo, TodoList , Footer } from '../../components/Todo';
import { ITodo } from '../../store/domains/todo/interfaces';
import { uuid } from '../../utils';
import {} from '../../store/domains/todo/actionTypes'

interface IProps {
  visabilityFilter: string;
  visableTodos: ITodo[];
  addTodo: (text: string, id: string) => void;
  toggleTodo: (id: string) => void;
  filterTodo: (filter: string) => void;
}

class TodoApp extends React.Component <IProps> {
  render() {
    const { visableTodos, visabilityFilter, addTodo, toggleTodo, filterTodo } = this.props;
    return (
      <div>
        <AddTodo onAddClick={ text => {
          let nextId = uuid();
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
