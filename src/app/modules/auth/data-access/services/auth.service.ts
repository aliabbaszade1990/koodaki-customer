import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/modules/core';
import { AuthResultDTO } from '../dto/user-auth-result.dto';

@Injectable()
export class AuthService {
  constructor(private storage: StorageService, private router: Router) {}

  storeUserTokens(result: AuthResultDTO) {
    this.storage.setToken(result.accessToken);
    // this.storage.setRefreshToken(result.refreshToken);
  }
}
