import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CoreFacade, StorageService } from 'src/app/modules/core';
import { AuthApiService } from '../apis/auth-api.service';
import { LoginDTO, UserWithTokenResponse } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private storage: StorageService,
    private router: Router,
    private authApi: AuthApiService,
    private coreFacade: CoreFacade
  ) {}

  storeUserTokens(result: UserWithTokenResponse) {
    this.storage.saveAccessToken(result.accessToken);
  }

  login(model: LoginDTO): Observable<UserWithTokenResponse> {
    return this.authApi.login(model).pipe(
      tap((result) => {
        this.storeUserTokens(result);
        this.coreFacade.setUser(result.user);
      })
    );
  }

  logout(): void {
    this.storage.clearAll();
    this.coreFacade.reset();
    this.router.navigate(['auth/sign-in']);
  }
}
