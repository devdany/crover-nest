import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: 'schema.gpl',
    }),
    UserModule,
  ],
})
export class AppModule {}
