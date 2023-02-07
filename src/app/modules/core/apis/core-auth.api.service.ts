import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { UserWithTokenResponse } from '../../auth/data-access/dto/auth.dto';
import { RefreshTokenResultDto } from '../../auth/data-access/dto/refresh-token-result-dto';

@Injectable()
export class CoreAuthApiService {
  constructor(private http: HttpClient) {}

  private endpointBase = 'auth';

  me(): Observable<UserWithTokenResponse> {
    return this.http.get<any>(this.endpointBase + '/me');
  }

  meSync(): Promise<UserWithTokenResponse> {
    return firstValueFrom(this.me());
  }

  refresh(): Observable<RefreshTokenResultDto> {
    return this.http.post<any>(this.endpointBase + '/refresh', null);
  }

  refreshSync(): Promise<RefreshTokenResultDto> {
    return firstValueFrom(this.refresh());
  }
}
