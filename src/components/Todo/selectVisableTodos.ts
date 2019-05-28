import { Visability } from '../../consts';
import { IState } from './interfaces';

const getVisibleTodos = (todos: IState[], filter: string) => {
  switch (filter) {
    case Visability.SHOW_ALL:
      return todos;
    case Visability.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case Visability.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export default getVisibleTodos;
