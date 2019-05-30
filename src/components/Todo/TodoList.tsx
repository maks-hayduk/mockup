import React from 'react';

import { IState } from '../../store/domains/todo/interfaces';

interface ITodo {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: React.FC <ITodo> = ({ onClick, completed, text }) => {
  return(
    <li onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >{text}</li>
  );
};

interface ITodoList {
  todos: IState[];
  onTodoClick: (todo: number) => void;
}

const TodoList: React.FC <ITodoList> = ({ todos, onTodoClick }) => {
  const listOfTodo = todos.map(todo => 
    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
  );
  return(
    <ul>
      {listOfTodo}
    </ul>
  );
};

export default TodoList;
