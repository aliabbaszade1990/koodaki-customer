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

    if (this.storage.accessToken) {
      await this.startAppWithAccessToken();
    }

    this.coreFacade.initialized();
  }

  async startAppWithAccessToken(): Promise<void> {
    await this.getUserWithAccessToken();
  }

  async getUserWithAccessToken(): Promise<void> {
    const user = await this.authAPI.meSync().catch((error) => {
      throw error;
    });
    this.coreFacade.setUser(user);
  }
}
