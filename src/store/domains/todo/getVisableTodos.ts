import { VisabilityList } from '../../../consts';
import { IState } from './interfaces';

const getVisibleTodos = (todos: IState[], filter: string) => {
  switch (filter) {
    case VisabilityList.ALL:
      return todos;
    case VisabilityList.ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisabilityList.COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export default getVisibleTodos;
