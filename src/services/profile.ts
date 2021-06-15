import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm';
import { ProfileEntity } from '../entities/profile'
import { Repository as RepositoryKeyStore } from '../injectKeyStore'

@Injectable()
export class ProfileService {
  constructor(
    @Inject(RepositoryKeyStore.PROFILE_REPOSITORY)
    private profileRepository: Repository<ProfileEntity>
  ){}
}