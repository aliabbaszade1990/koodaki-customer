import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login.dto';
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
