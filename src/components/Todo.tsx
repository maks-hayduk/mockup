// tslint:disable
import React from 'react';
import { createStore } from 'redux';
import todoApp from './Redux';
import AddTodo from './Redux/AddTodo';
import TodoList from './Redux/TodoList';
import Footer from './Redux/Footer';
import { IState } from './Redux/interfaces';
import { getVisibleTodos } from './Redux/visabilityFilter';
import {ADD_TODO, TOGGLE_TODO, SET_VISABILITY_FILTER } from './Redux/actionTypes';

const store = createStore(todoApp);

interface IProps {
  todos: IState[];
  visabilityFilter: any;
}

let nextId = 0;

const TodoApp: React.FC <IProps> = ({todos, visabilityFilter}) => {
  const visibleTodos = getVisibleTodos(todos, visabilityFilter);
  return(
    <div>
      <AddTodo onAddClick={ text => 
        store.dispatch({
          type: ADD_TODO,
          text: text,
          id: nextId++
        })
      } />
      
      <TodoList 
        todos={visibleTodos} 
        onTodoClick={id => 
          store.dispatch({
            type: TOGGLE_TODO,
            id
          })
        } />

      <Footer visabilityFilter={visabilityFilter} onFilterClick={ filter => 
        store.dispatch({
          type: SET_VISABILITY_FILTER,
          filter
        })
      } />
    </div>
  )
}

export { TodoApp, store };
