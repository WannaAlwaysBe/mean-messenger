import {createAction, props} from '@ngrx/store';

import {Message} from '../../../models';

export const getAll = createAction(
  '[Message] WS Get All Messages',
  props<{chatId: string}>(),
);

export const getAllSuccess = createAction(
  '[Message] WS Get All Messages Success',
  props<{messages: Message[]}>(),
);

export const getNewSuccess = createAction(
  '[Message] WS Get New Message Success',
  props<{message: Message}>(),
);

export const send = createAction(
  '[Message] WS Send',
  props<{message: Message}>(),
);

export const clear = createAction(
  '[Message] Clear State',
);
