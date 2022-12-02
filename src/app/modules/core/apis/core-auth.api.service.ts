import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Environment } from 'src/app/shared/interfaces';

@Injectable()
export class CoreAuthApiService {
  constructor(
    private http: HttpClient,
    @Inject('environment') private environment: Environment
  ) {}

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
