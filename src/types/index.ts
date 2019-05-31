import { IState, IFilteredTodos } from '../store/domains/todo';

export interface IStateToProps {
  todos: IState;
  visabilityFilter: string;
  filteredTodos: IFilteredTodos;
}
