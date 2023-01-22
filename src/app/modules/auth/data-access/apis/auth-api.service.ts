import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login.dto';
import { AuthResultDTO } from '../dto/user-auth-result.dto';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  endpointBase = 'auth';
  login(model: LoginDTO): Observable<AuthResultDTO> {
    return this.http.post<AuthResultDTO>(this.endpointBase + '/login', model);
  }

  otp(model: { phoneNumber: string }): Observable<AuthResultDTO> {
    return this.http.post<AuthResultDTO>(this.endpointBase + '/otp', null);
  }
}
