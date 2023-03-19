import { CurrentItem } from '../interfaces/current-item-interface';
import { GetProjectDto } from './get-project-dto';

export interface GetFileDto extends CurrentItem {
  id: string;
  name: string;
  selected: boolean;
  comment: string;
  url?: string;
  project?: GetProjectDto;
  createdAt: string;
  projectId: string;
}
