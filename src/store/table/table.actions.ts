import { createAction, props } from '@ngrx/store';

export const setList = createAction('[Table] Set List', props<{ list }>());
export const sortListByKey = createAction('[Table] Sort List By Key', props<{ key }>());
export const reverseList = createAction('[Table] Reverse List');