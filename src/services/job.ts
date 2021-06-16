import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobEntity } from '../entities/job';
import { Repository as RepositoryKeyStore } from '../injectKeyStore';

@Injectable()
export class JobService {
  constructor(
    @Inject(RepositoryKeyStore.JOB_REPOSITORY)
    private jopRepository: Repository<JobEntity>,
  ) {}
}
