import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { GetUserDTO } from 'src/app/modules/auth/data-access/dto/get-user.dto';
import { CoreFacade } from 'src/app/modules/core';
import { ProjectApiService } from '../../data-access/apis/project-api.service';
import { ProjectListParams } from '../../data-access/models/list-params-project.model';

@Component({
  selector: 'koodaki-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  constructor(
    private projectApi: ProjectApiService,
    private coreFacade: CoreFacade
  ) {}

  ngOnInit(): void {
    this.listenStore();
  }

  user?: GetUserDTO;
  listenStore() {
    this.coreFacade.user$
      .pipe(filter((u) => !!u))
      .subscribe((user: GetUserDTO) => {
        this.user = user;
        this.listParams.customerId = user.id;
        this.getProjects();
      });
  }

  projects: any[] = [];
  listParams = new ProjectListParams('');
  getProjects() {
    this.projectApi.getAll(this.listParams).subscribe((result) => {
      this.projects = result.items;
    });
  }
}
