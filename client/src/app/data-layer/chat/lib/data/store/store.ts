import {combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromChatReducer from './reducers/chat.reducer';
import * as fromChatLoadingReducer from './reducers/chat-loading.reducer';

export const featureKey = '[DATA LAYER] CHAT';

export interface FeatureState {
  [featureKey]: State;
}

export interface State {
  [fromChatReducer.key]: fromChatReducer.State;
  [fromChatLoadingReducer.key]: fromChatLoadingReducer.State;
}

export const featureReducer = combineReducers({
  [fromChatReducer.key]: fromChatReducer.reducer,
  [fromChatLoadingReducer.key]: fromChatLoadingReducer.reducer,
});

export const featureSelector = createFeatureSelector<State>(featureKey);

/*
* Chat selectors
* */
export const chatSelector = createSelector<FeatureState, [State], fromChatReducer.State>(
  featureSelector,
  (state) => state[fromChatReducer.key],
);
export const chatSelectors = fromChatReducer.adapter.getSelectors<FeatureState>(chatSelector);
export const chatLoadingSelector = createSelector<FeatureState, [State], fromChatLoadingReducer.State>(
  featureSelector,
  (state) => state[fromChatLoadingReducer.key],
);
