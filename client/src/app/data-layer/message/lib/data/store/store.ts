import {combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromMessageReducer from './reducers/messages/message.reducer';

export const featureKey = '[DATA LAYER] MESSAGE';

export interface FeatureState {
  [featureKey]: State;
}

export interface State {
  [fromMessageReducer.key]: fromMessageReducer.State;
}

export const featureReducer = combineReducers({
  [fromMessageReducer.key]: fromMessageReducer.reducer,
});

export const featureSelector = createFeatureSelector<State>(featureKey);

/*
* Message selectors
* */
export const messageSelector = createSelector<FeatureState, [State], fromMessageReducer.State>(
  featureSelector,
  (state) => state[fromMessageReducer.key],
);
export const messageSelectors = fromMessageReducer.adapter.getSelectors<FeatureState>(messageSelector);
