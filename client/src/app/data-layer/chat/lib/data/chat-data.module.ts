import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ChatRestModule} from '../rest/chat-rest.module';
import {ChatDataService} from './services/chat-data.service';
import {featureKey, featureReducer} from './store/store';
import {ChatEffects} from './store/effects/chat.effects';
import {ChatActionsService} from './services/chat-actions.service';

@NgModule({
  providers: [ChatDataService, ChatActionsService],
  imports: [
    ChatRestModule,
    StoreModule.forFeature(featureKey, featureReducer),
    EffectsModule.forFeature([ChatEffects]),
  ]
})
export class ChatDataModule { }
