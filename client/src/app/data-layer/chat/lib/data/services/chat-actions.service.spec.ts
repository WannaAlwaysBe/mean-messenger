import { TestBed } from '@angular/core/testing';

import { ChatActionsService } from './chat-actions.service';

describe('ChatActionsService', () => {
  let service: ChatActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
