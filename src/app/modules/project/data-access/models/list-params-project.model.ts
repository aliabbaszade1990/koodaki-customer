import { ListParams } from 'src/app/shared/models/list-params.model';

export class ProjectListParams extends ListParams {
  customerId: string;

  constructor(
    customerId: string,
    size?: number,
    page?: number,
    search?: string
  ) {
    super(page, size, search);
    this.customerId = customerId;
  }
}
