import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../../../models';

export const loadAll = createAction(
  '[User] Load All'
);
export const loadAllSuccess = createAction(
  '[User] Load All Success',
  props<{users: User[]}>(),
);
export const loadAllFailure = createAction(
  '[User] Load All Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const loadOne = createAction(
  '[User] Load One',
  props<{userId: string}>(),
);
export const loadOneSuccess = createAction(
  '[User] Load One Success',
  props<{user: User}>(),
);
export const loadOneFailure = createAction(
  '[User] Load One Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);
