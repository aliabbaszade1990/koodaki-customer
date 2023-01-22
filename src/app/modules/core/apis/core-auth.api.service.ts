import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class CoreAuthApiService {
  constructor(private http: HttpClient) {}

  private endpointBase = 'auth';

  me(): Observable<any> {
    return this.http.get<any>(this.endpointBase + '/me');
  }

  meSync(): Promise<any> {
    return firstValueFrom(this.me());
  }

  refresh(): Observable<any> {
    return this.http.get<any>(this.endpointBase + '/refresh');
  }

  refreshSync(): Promise<any> {
    return firstValueFrom(this.me());
  }
}
