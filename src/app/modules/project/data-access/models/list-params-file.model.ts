import { ListParams } from 'src/app/shared/models/list-params.model';

export class FileListParams extends ListParams {
  projectId: string;
  selected?: boolean;

  constructor(
    projectId: string,
    selected?: boolean,
    size?: number,
    page?: number,
    search?: string
  ) {
    super(size, page, search);
    this.projectId = projectId;
    this.selected = selected;
  }
}
