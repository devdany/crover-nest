import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user';
import { ProfileModule } from './modules/profile';
import { JobModule } from './modules/job';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: 'schema.gpl',
    }),
    UserModule,
    ProfileModule,
    JobModule,
  ],
})
export class AppModule {}
