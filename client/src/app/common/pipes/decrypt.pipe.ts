import { Pipe, PipeTransform } from '@angular/core';

import { EncryptionService } from '../services/encryption.service';

@Pipe({
  name: 'decrypt'
})
export class DecryptPipe implements PipeTransform {
  constructor(
    private encryptionService: EncryptionService,
  ) { }

  transform(text: string): string {
    return this.encryptionService.decrypt(text);
  }
}
