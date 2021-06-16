import { createConnection } from 'typeorm';
import { Connection } from '../injectKeyStore';

export const databaseProviders = [
  {
    provide: Connection.DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'crover-dev',
        entities: [__dirname + '/../entities/*{.ts,.js}'],
        synchronize: true,
      }),
  },
];
