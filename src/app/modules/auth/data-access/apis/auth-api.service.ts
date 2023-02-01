import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  LoginDTO,
  LoginResultDTO,
  OtpResultDto,
  RequestOtpDto,
} from '../dto/auth.dto';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  endpointBase = 'auth';
  login(model: LoginDTO): Observable<LoginResultDTO> {
    return this.http.post<LoginResultDTO>(this.endpointBase + '/login', model);
  }

  otp(model: RequestOtpDto): Observable<OtpResultDto> {
    return this.http.post<LoginResultDTO>(
      this.endpointBase + '/request-otp',
      model
    );
  }
}
