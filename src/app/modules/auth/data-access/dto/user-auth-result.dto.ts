import { GetUserDTO } from './get-user.dto';
import { RefreshTokenResultDto } from './refresh-token-result-dto';

export interface AuthResultDTO extends RefreshTokenResultDto {
  user: GetUserDTO;
}
