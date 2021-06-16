import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../providers/user';
import { UserService } from '../services/user';
import { UserResolver } from '../resolvers/user';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, UserResolver, ...userProviders],
})
export class UserModule {}
