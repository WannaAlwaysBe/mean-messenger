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

export const loadCurrent = createAction(
  '[User] Load Current',
);
export const loadCurrentSuccess = createAction(
  '[User] Load Current Success',
  props<{user: User}>(),
);
export const loadCurrentFailure = createAction(
  '[User] Load Current Failure',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);
