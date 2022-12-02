import { GetUserDTO } from './get-user.dto';

export interface UserAuthResultDTO {
  accessToken: string;
  refreshToken: string;
  user: GetUserDTO;
}
