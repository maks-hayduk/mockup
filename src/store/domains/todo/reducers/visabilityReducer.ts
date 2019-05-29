import Immutable from 'seamless-immutable';
import { SET_VISABILITY_FILTER } from '../actionTypes';
import { VisabilityList } from '../../../../consts';
import { IAction } from '../interfaces';

const initialVisability: Immutable.Immutable<string> = Immutable(VisabilityList.ALL);

const visabilityFilter = (state = initialVisability, action: IAction) => {
  return action.type === SET_VISABILITY_FILTER ? action.filter : state;
};

export default visabilityFilter;
