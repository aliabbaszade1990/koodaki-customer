import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListDTO } from 'src/app/shared/interfaces/get-list.interface';
import { GetProjectDto } from '../dtos/get-project-dto';
import { ProjectListParams } from '../models/list-params-project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  constructor(private http: HttpClient) {}

  endpointBase = 'project';
  getAll(params: ProjectListParams): Observable<GetListDTO<GetProjectDto>> {
    return this.http.get<GetListDTO<GetProjectDto>>(
      `${this.endpointBase}/${ProjectListParams.stringify(params)}`
    );
  }
}
