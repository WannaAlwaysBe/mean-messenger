import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() { }

  public setData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  public getData<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }
}
