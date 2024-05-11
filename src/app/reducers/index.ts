import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { pageReducer } from './pager.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  pager: pageReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
