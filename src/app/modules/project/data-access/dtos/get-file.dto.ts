import { CurrentItem } from '../interfaces/current-item-interface';

export interface GetFileDto extends CurrentItem {
  id: string;
  name: string;
  selected: boolean;
  comment: string;
  url: string;
}
