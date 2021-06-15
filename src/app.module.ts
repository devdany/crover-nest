import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user';
import { ProfileModule } from './modules/profile'

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: 'schema.gpl',
    }),
    UserModule,
    ProfileModule,
  ],
})
export class AppModule {}
