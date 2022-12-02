import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@koodaki/shared/utils';
import { UserAuthResultDTO } from '../dto/user-auth-result.dto';

@Injectable()
export class AuthService {
  constructor(private storage: StorageService, private router: Router) {}

  storeUserTokens(result: UserAuthResultDTO) {
    this.storage.setToken(result.accessToken);
    this.storage.setRefreshToken(result.refreshToken);
  }
}
