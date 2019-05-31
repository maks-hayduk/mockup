import { IState } from '../store/domains/todo';

export interface IStateToProps {
  todos: IState;
  visabilityFilter: string;
}
