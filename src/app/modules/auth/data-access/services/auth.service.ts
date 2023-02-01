import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CoreFacade, StorageService } from 'src/app/modules/core';
import { AuthApiService } from '../apis/auth-api.service';
import { LoginDTO, LoginResultDTO } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private storage: StorageService,
    private router: Router,
    private authApi: AuthApiService,
    private coreFacade: CoreFacade
  ) {}

  storeUserTokens(result: LoginResultDTO) {
    this.storage.saveAccessToken(result.accessToken);
  }

  async login(model: LoginDTO): Promise<void> {
    const loginResult: LoginResultDTO = await firstValueFrom(
      this.authApi.login(model)
    );
    this.storeUserTokens(loginResult);
    this.coreFacade.setUser(loginResult.user);
  }

  logout(): void {
    this.storage.clearAll();
    this.coreFacade.reset();
    this.router.navigate(['auth/sign-in']);
  }
}
