import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '@koodaki/shared/data-access';
import { Observable } from 'rxjs';
import { UserAuthResultDTO } from '../dto/user-auth-result.dto';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  endpointBase = 'auth';
  login(model: LoginDTO): Observable<UserAuthResultDTO> {
    return this.http.post<UserAuthResultDTO>(
      this.endpointBase + '/login',
      model
    );
  }

  otpLogin(model: LoginDTO): Observable<UserAuthResultDTO> {
    return this.http.post<UserAuthResultDTO>(
      this.endpointBase + '/login',
      model
    );
  }
}
