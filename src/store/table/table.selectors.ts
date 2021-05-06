import { createFeatureSelector, createSelector } from '@ngrx/store';
import TableState from './table.state';

const selector = createFeatureSelector<TableState>('table');

export const getList = createSelector(
  selector,
  (state: TableState) => state.list,
);

export const getListTitles = createSelector(
  selector,
  (state: TableState) => {
    if (state.list.length) {
      const [ row ] = state.list;
      return Object.keys(row);
    }
    return [];
  },
);

export const getSortedBy = createSelector(
  selector,
  (state: TableState) => state.sortedBy,
);
 