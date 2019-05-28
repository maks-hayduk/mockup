import { SET_VISABILITY_FILTER } from '../actionTypes';
import { Visability } from '../../../consts';
import { IAction } from '../interfaces';

const visabilityFilter = (state: string = Visability.SHOW_ALL, action: IAction) => {
  switch (action.type) {
    case SET_VISABILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visabilityFilter;
