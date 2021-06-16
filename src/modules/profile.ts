import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfileService } from '../services/profile';
import { profileProviders } from '../providers/profile';
import { jobProviders } from '../providers/job';
import { JobService } from '../services/job';

@Module({
  imports: [DatabaseModule],
  providers: [ProfileService, JobService, ...profileProviders, ...jobProviders],
})
export class ProfileModule {}
