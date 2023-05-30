import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { featureKey, featureReducer } from './store/store';
import { MessageEffects } from './store/effects/message.effects';
import { MessageDataService } from './services/message-data.service';

@NgModule({
  providers: [MessageDataService],
  imports: [
    StoreModule.forFeature(featureKey, featureReducer),
    EffectsModule.forFeature([MessageEffects]),
  ]
})
export class MessageDataModule { }
