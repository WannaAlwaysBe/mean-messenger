import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Chat, ChatInitialData } from '../../../models';

export const loadAll = createAction(
  '[Chat] Load All',
);
export const loadAllSuccess = createAction(
  '[Chat] Load All Success',
  props<{chats: Chat[]}>(),
);
export const loadAllFailure = createAction(
  '[Chat] Load All Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const create = createAction(
  '[Chat] Create',
  props<{chatInitialData: ChatInitialData}>(),
);
export const createSuccess = createAction(
  '[Chat] Create Success',
  props<{chat: Chat}>(),
);
export const createFailure = createAction(
  '[Chat] Create Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);
