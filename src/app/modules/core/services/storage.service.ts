import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { STORAGE_ITEMS } from 'src/app/shared/constants';
import * as store from 'store';
import * as plugins from 'store/plugins/all';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  store: any = store;
  constructor() {
    this.store.addPlugin(plugins);
  }

  get accessToken(): string | null {
    try {
      const expiresAt = this.store.getExpiration(STORAGE_ITEMS.accessToken);
      const expired = expiresAt && dayjs().isAfter(expiresAt);

      if (!expiresAt || expired) {
        this.store.remove(STORAGE_ITEMS.accessToken);
      }

      return !expired ? this.store.get(STORAGE_ITEMS.accessToken) : null;
    } catch (error) {
      return null;
    }
  }

  get refreshToken(): string | null {
    try {
      const expiresAt = this.store.getExpiration(STORAGE_ITEMS.refreshToken);
      const expired = expiresAt && dayjs().isAfter(expiresAt);

      if (!expiresAt || expired) {
        this.store.remove(STORAGE_ITEMS.refreshToken);
      }

      return !expired ? this.store.get(STORAGE_ITEMS.refreshToken) : null;
    } catch (error) {
      return null;
    }
  }

  get phoneNumber(): string | null {
    return this.store.get(STORAGE_ITEMS.phoneNumber);
  }

  saveAccessToken(token: string): void {
    const expiration = dayjs().add(30, 'day');
    this.store.set(STORAGE_ITEMS.accessToken, token, expiration);
  }

  saveRefreshToken(token: string): void {
    const expiration = dayjs().add(1, 'month');
    this.store.set(STORAGE_ITEMS.refreshToken, token, expiration);
  }

  savePhoneNumber(token: string): void {
    this.store.set(STORAGE_ITEMS.phoneNumber, token);
  }

  clearPhoneNumber(): void {
    this.store.clear(STORAGE_ITEMS.phoneNumber);
  }

  clearAll(): void {
    this.store.clearAll();
  }
}
