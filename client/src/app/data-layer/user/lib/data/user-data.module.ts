import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserRestModule } from '../rest/user-rest.module';
import { featureKey, featureReducer } from './store/store';
import { UserEffects } from './store/effects/user.effects';
import { UserDataService } from './services/user-data.service';

@NgModule({
  providers: [UserDataService],
  imports: [
    UserRestModule,
    StoreModule.forFeature(featureKey, [featureReducer]),
    EffectsModule.forFeature(UserEffects)
  ]
})
export class UserDataModule { }
