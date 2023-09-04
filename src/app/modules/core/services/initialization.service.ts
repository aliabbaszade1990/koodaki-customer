import { Injectable } from '@angular/core';
import { CoreFacade } from '../+state/core.facade';
import { UserWithTokenResponse } from '../../auth/data-access/dto/auth.dto';
import { AuthService } from '../../auth/data-access/services/auth.service';
import { CoreAuthApiService } from '../apis/core-auth.api.service';
import { StorageService } from './storage.service';
@Injectable()
export class InitializationService {
  constructor(
    private authAPI: CoreAuthApiService,
    private coreFacade: CoreFacade,
    private storage: StorageService,
    private authService: AuthService
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
    try {
      const result: UserWithTokenResponse = await this.authAPI.meSync();
      this.coreFacade.setUser(result.user);
    } catch (error) {
      console.error('Error on auth/me', error);
      this.authService.logout();
    }
  }
}
