import { createReducer, on } from '@ngrx/store';
import { setList, reverseList, sortListByKey } from './table.actions';
import TableState from './table.state';
 
export const INITIAL_STATE: TableState = {
  list: [],
  sortedBy: '',
};

const _tableReducer = createReducer(
  INITIAL_STATE,
  on(setList, (state, { list }) => ({
    ...state,
      list,
  })),
  on(reverseList, (state) => ({
    ...state,
    list: state.list.slice().reverse(),
  })),
  on(sortListByKey, (state, { key }) => ({
    ...state,
    list: state.list.slice().sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0),
    sortedBy: key,
  })),
);
 
export function tableReducer(state, action) {
  return _tableReducer(state, action);
}