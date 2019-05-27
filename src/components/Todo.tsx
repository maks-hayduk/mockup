// tslint:disable
import React from 'react';
import { combineReducers, AnyAction } from 'redux';
import { createStore } from 'redux';

const todo = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => 
        todo(t, action)
      );
    default:
      return state;
  }
};

const visabilityFilter = (state: string = 'SHOW_ALL', action: any) => {
  switch (action.type) {
    case 'SET_VISABILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const getVisibleTodos = (todos: any[], filter: any) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const todoApp = combineReducers({
  todos,
  visabilityFilter
});

const store = createStore(todoApp);

interface ILink {
  filter: string;
  currentFilter: string;
  onClick: any;
}

const FilterLink: React.FC<ILink> = ({filter, children, currentFilter, onClick}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a  href="#" 
        onClick={(e) => {
          e.preventDefault();
          onClick(filter);
      }}>{children}</a>
  );
} 

interface ITodo {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: React.FC <ITodo> = ({onClick, completed, text}) => {
  return(
    <li onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
    >{text}</li>
  );
}

interface ITodoList {
  todos: any[];
  onTodoClick: (todo: any) => void;
}

const TodoList: React.FC <ITodoList> = ({todos, onTodoClick}) => {
  const listOfTodo = todos.map(todo => 
    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
  )
  return(
    <ul>
      {listOfTodo}
    </ul>
  );
}

interface IAddTodo {
  onAddClick: (input: any) => any;
}

const AddTodo: React.FC <IAddTodo> = ({onAddClick}) => {
  let input: any;

  return (
    <div>
      <input type="text" ref={node => {
          input = node;
        }} />
        <button type="button" onClick={() => {
          onAddClick(input.value)
          input.value = '';
          }}>Add task</button>
    </div>
  );
}

interface IFooter {
  visabilityFilter: string;
  onFilterClick: (filter: any) => any;
}

const Footer: React.FC <IFooter> = ({visabilityFilter, onFilterClick}) => {
  return(
    <p>
      Show:
      <FilterLink filter="SHOW_ALL" currentFilter={visabilityFilter} onClick={onFilterClick}>All</FilterLink>
      {' '}
      <FilterLink filter="SHOW_ACTIVE" currentFilter={visabilityFilter} onClick={onFilterClick}>Active</FilterLink>
      {' '}
      <FilterLink filter="SHOW_COMPLETED" currentFilter={visabilityFilter} onClick={onFilterClick}>Completed</FilterLink>
    </p>
  );
}

interface IProps {
  todos: any[];
  visabilityFilter: any;
}

let nextId = 0;

const TodoApp: React.FC <IProps> = ({todos, visabilityFilter}) => {
  const visibleTodos = getVisibleTodos(todos, visabilityFilter);
  return(
    <div>
      <AddTodo onAddClick={ text => 
        store.dispatch({
          type: 'ADD_TODO',
          text: text,
          id: nextId++
        })
      } />
      
      <TodoList 
        todos={visibleTodos} 
        onTodoClick={id => 
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        } />

      <Footer visabilityFilter={visabilityFilter} onFilterClick={ filter => 
        store.dispatch({
          type: 'SET_VISABILITY_FILTER',
          filter
        })
      } />
    </div>
  )
}

export { TodoApp, store };
