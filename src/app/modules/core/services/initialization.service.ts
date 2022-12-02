import { Injectable } from '@angular/core';
import { CoreFacade } from '../+state/core.facade';
import { CoreAuthApiService } from '../apis/core-auth.api.service';
import { StorageService } from './storage.service';
@Injectable()
export class InitializationService {
  constructor(
    private authAPI: CoreAuthApiService,
    private coreFacade: CoreFacade,
    private storage: StorageService
  ) {}

  async initializeApp(): Promise<void> {
    this.coreFacade.init();

    if (this.storage.token && this.storage.refreshToken) {
      await this.startAppWithAccessToken();
    } else if (this.storage.refreshToken) {
      await this.startAppWithRefreshToken();
    }

    this.coreFacade.initialized();
  }

  async startAppWithAccessToken(): Promise<void> {
    await this.getUserWithAccessToken();
  }

  async startAppWithRefreshToken(): Promise<void> {
    await this.authAPI.refreshSync();
    await this.getUserWithAccessToken();
  }

  async refreshTokens(): Promise<void> {
    await this.authAPI.refreshSync();
  }

  async getUserWithAccessToken(): Promise<void> {
    const userInfo = await this.authAPI.meSync().catch((error) => {
      throw error;
    });
    this.coreFacade.setUser(userInfo.admin);
  }
}
