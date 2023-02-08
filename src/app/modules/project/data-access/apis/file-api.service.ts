import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListDTO } from 'src/app/shared/interfaces/get-list.interface';
import { GetFileDto } from '../dtos/get-file.dto';

@Injectable({
  providedIn: 'root',
})
export class FileApiService {
  constructor(private http: HttpClient) {}

  private endpoint = 'file';

  getFiles(projectId: string): Observable<GetListDTO<GetFileDto>> {
    return this.http.get<GetListDTO<GetFileDto>>(
      `${this.endpoint}/getByFilter/${projectId}?size=20&pageNumber=1`
    );
  }
}
