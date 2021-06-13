import { createConnection } from 'typeorm';
import { Connection } from '../injectKeyStore'

export const databaseProviders = [
  {
    provide: Connection.DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'rhkr1636',
        database: 'crover-dev',
        entities: [__dirname + '/../entities/*{.ts,.js}'],
        synchronize: true,
      }),
  },
];
