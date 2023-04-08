import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Chat } from '../../../../models';

export const loadAll = createAction(
  '[Chat Rest] Load All',
);
export const loadAllSuccess = createAction(
  '[Chat Rest] Load All Success',
  props<{chats: Chat[]}>(),
);
export const loadAllFailure = createAction(
  '[Chat Rest] Load All Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const create = createAction(
  '[Chat Rest] Create',
  props<{chat: Chat}>(),
);
export const createSuccess = createAction(
  '[Chat Rest] Create Success',
  props<{chat: Chat}>(),
);
export const createFailure = createAction(
  '[Chat Rest] Create Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const remove = createAction(
  '[Chat Rest] Remove',
  props<{chat: Chat}>(),
);
export const removeSuccess = createAction(
  '[Chat Rest] Remove Success',
  props<{chat: Chat}>(),
);
export const removeFailure = createAction(
  '[Chat Rest] Remove Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);
