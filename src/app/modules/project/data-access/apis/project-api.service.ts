import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetProjectDto } from '../dtos/get-project-dto';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  constructor(private http: HttpClient) {}

  endpointBase = 'project';
  getAll(customerId: string): Observable<GetProjectDto[]> {
    return this.http.get<GetProjectDto[]>(
      `${this.endpointBase}/getProjectsByCustomer/${customerId}`
    );
  }
}
