import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { userProviders } from './user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, UserResolver, ...userProviders],
})
export class UserModule {}
