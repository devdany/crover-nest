import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async createOneUser(userInput: UserInput): Promise<User> {
    return this.userRepository
      .create({
        ...userInput,
      })
      .save();
  }
}
