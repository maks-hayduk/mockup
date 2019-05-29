import { IState } from '../../components/Todo/interfaces';

interface IStateToProps {
  todos: IState[];
  visabilityFilter: string;
}

export const selectTodos = (state: IStateToProps) => {
  return state.todos;
};

export const selectVisabilityFilter = (state: IStateToProps) => {
  return state.visabilityFilter;
};
