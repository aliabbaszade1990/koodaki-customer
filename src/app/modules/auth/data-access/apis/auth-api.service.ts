import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginDTO,
  OtpResultDto,
  RequestOtpDto,
  UserWithTokenResponse,
} from '../dto/auth.dto';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  endpointBase = 'auth';
  login(model: LoginDTO): Observable<UserWithTokenResponse> {
    return this.http.post<UserWithTokenResponse>(
      this.endpointBase + '/login',
      model
    );
  }

  otp(model: RequestOtpDto): Observable<OtpResultDto> {
    return this.http.post<UserWithTokenResponse>(
      this.endpointBase + '/request-otp',
      model
    );
  }
}
