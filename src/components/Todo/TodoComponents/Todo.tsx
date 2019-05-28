// tslint:disable
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import { IState } from '../interfaces';
import { getVisibleTodos } from '../reducers/visabilityFilter';

let nextId = 0;

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
    return(
      <div>
        <AddTodo onAddClick={ text => {
          addTodo(text, nextId)
          nextId++;
        }
        } />
        
        <TodoList 
          todos={visibleTodos} 
          onTodoClick={id => 
            toggleTodo(id)
          } />

        <Footer visabilityFilter={visabilityFilter} onFilterClick={ filter => 
          filterTodo(filter)
        } />
      </div>
    )
  }
}

export default TodoApp;
