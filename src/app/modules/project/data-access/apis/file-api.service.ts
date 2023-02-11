import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListDTO } from 'src/app/shared/interfaces/get-list.interface';
import { GetFileDto } from '../dtos/get-file.dto';
import { FileListParams } from '../models/list-params-file.model';
@Injectable({
  providedIn: 'root',
})
export class FileApiService {
  constructor(private http: HttpClient) {}

  private endpoint = 'file';

  getFiles(params: FileListParams): Observable<GetListDTO<GetFileDto>> {
    return this.http.get<GetListDTO<GetFileDto>>(
      `${this.endpoint}/${FileListParams.stringify(params)}`
    );
  }

  update(file: GetFileDto): Observable<GetFileDto> {
    return this.http.patch<GetFileDto>(`${this.endpoint}/${file.id}`, file);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }
}
