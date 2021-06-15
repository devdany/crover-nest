import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ProfileService } from '../services/profile'
import { profileProviders } from '../providers/profile'

@Module({
  imports: [DatabaseModule],
  providers: [
    ProfileService,
    ...profileProviders
  ]
})
export class ProfileModule{}