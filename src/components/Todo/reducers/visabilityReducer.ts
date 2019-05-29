import { SET_VISABILITY_FILTER } from '../actionTypes';
import { VisabilityList } from '../../../consts';
import { IAction } from '../interfaces';

const visabilityFilter = (state: string = VisabilityList.ALL, action: IAction) => {
  return action.type === SET_VISABILITY_FILTER ? action.filter : state;
};

export default visabilityFilter;
