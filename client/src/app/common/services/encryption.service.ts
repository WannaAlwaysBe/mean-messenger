import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

import { environment } from '../../../environment';

@Injectable()
export class EncryptionService {
  public encrypt(text: string): string {
    return CryptoJS.AES.encrypt(text, environment.SECRET).toString();
  }

  public decrypt(text: string): string {
    return CryptoJS.AES.decrypt(text, environment.SECRET).toString(CryptoJS.enc.Utf8);
  }
}
