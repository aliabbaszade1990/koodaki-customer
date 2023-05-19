export interface UpdateProjectDto {
  id: string;
  title: string;
  isClosed: boolean;
  location: string;
  customerId: string;
  startedAt: Date;
  finalized: boolean;
}
