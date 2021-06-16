import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { JobService } from '../services/job';
import { jobProviders } from '../providers/job';

@Module({
  imports: [DatabaseModule],
  providers: [JobService, ...jobProviders],
})
export class JobModule {}
