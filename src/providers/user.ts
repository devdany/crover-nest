import { Connection } from 'typeorm';
import { UserEntity } from '../entities/user';
import {
  Repository,
  Connection as ConnectionKeyStore,
} from '../injectKeyStore';

export const userProviders = [
  {
    provide: Repository.USER_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: [ConnectionKeyStore.DATABASE_CONNECTION],
  },
];
