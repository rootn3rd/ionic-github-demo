import { User } from './user';

export interface Repository {
  name: string;
  description: string;
  owner: User;
}
