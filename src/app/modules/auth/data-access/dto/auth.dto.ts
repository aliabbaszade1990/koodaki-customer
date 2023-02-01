import { GetUserDTO } from './get-user.dto';
import { RefreshTokenResultDto } from './refresh-token-result-dto';

export interface LoginResultDTO extends RefreshTokenResultDto {
  user: GetUserDTO;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RequestOtpDto {
  username: string;
}

export interface OtpResultDto {
  user: GetUserDTO;
}

export interface OtpResultDto {
  user: GetUserDTO;
}
