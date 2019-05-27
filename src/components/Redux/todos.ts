import { ADD_TODO, TOGGLE_TODO } from './actionTypes'; 
import { IAction, IState } from './interfaces';

const todos = (state: IState[] = [], action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        } as IState
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      }
      );
    default:
      return state;
  }
};

export default todos;
