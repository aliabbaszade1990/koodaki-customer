import { GetUserDTO } from 'src/app/modules/auth/data-access/dto/get-user.dto';

export interface GetProjectDto {
  id: string;
  title: string;
  isClosed: boolean;
  location: string;
  filesAt: string;
  createAt: Date;
  startedAt: Date;
  endedAt: Date;
  customer: GetUserDTO;
  // todo: add
  totalSelectedFile: number;
}
