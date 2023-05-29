import { GetUserDTO } from 'src/app/modules/auth/data-access/dto/get-user.dto';

export interface GetProjectDto {
  id: string;
  title: string;
  isClosed: boolean;
  location: string;
  filesAt: string;
  startedAt: Date;
  endedAt: Date;
  totalFiles: number;
  selectedImagesCount: number;
  defaultImage: string;
  finalized: boolean;
  customer: GetUserDTO;
}
