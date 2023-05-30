import {createAction} from "@ngrx/store";

export const connectionIsSet = createAction(
  '[WS General] WS Connection set'
);

export const connectionClosed = createAction(
  '[WS General] WS Connection closed'
);
