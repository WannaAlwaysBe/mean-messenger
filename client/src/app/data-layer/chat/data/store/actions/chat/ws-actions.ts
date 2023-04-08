import { createAction, props } from '@ngrx/store';

import { Chat } from '../../../../models';

export const create = createAction(
  '[Chat WS] Create',
  props<{chat: Chat}>(),
);
export const remove = createAction(
  '[Chat WS] Remove',
  props<{chat: Chat}>(),
);
