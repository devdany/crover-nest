import { Connection } from 'typeorm';
import { JobEntity } from '../entities/job';
import {
  Repository,
  Connection as ConnectionKeyStore,
} from '../injectKeyStore';

export const jobProviders = [
  {
    provide: Repository.JOB_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(JobEntity),
    inject: [ConnectionKeyStore.DATABASE_CONNECTION],
  },
];
