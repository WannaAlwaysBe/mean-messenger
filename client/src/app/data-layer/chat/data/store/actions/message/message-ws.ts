import { createAction, props } from '@ngrx/store';

import { Message } from '../../../../models';

export const newMessage = createAction(
  '[Message WS] New Message',
  props<{message: Message}>(),
);
export const create = createAction(
  '[Message WS] Create',
  props<{message: Message}>(),
);
export const remove = createAction(
  '[Message WS] Remove',
  props<{message: Message}>(),
);
export const edit = createAction(
  '[Message WS] Edit',
  props<{message: Message}>(),
);
