import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProjectApiService } from './apis/project-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [ProjectApiService],
})
export class ProjectDataAccessModule {}
