import { Connection } from 'typeorm';
import { ProfileEntity } from '../entities/profile';
import { Repository, Connection as ConnectionKeyStore } from '../injectKeyStore'

export const profileProviders = [
  {
    provide: Repository.PROFILE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(ProfileEntity),
    inject: [ConnectionKeyStore.DATABASE_CONNECTION],
  },
];
