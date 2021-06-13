import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user';
import { CreateUserInput } from '../schemas/inputs/createUserInput'
import { Repository as RepositoryKeyStore } from '../injectKeyStore'

@Injectable()
export class UserService {
  constructor(
    @Inject(RepositoryKeyStore.USER_REPOSITORY)
    private userRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async createOneUser(userInput: CreateUserInput): Promise<UserEntity> {
    return this.userRepository
      .create({
        ...userInput,
      })
      .save();
  }
}