import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from '../services/user';
import { UserEntity } from '../entities/user';
import { CreateUserInput } from '../schemas/inputs/createUserInput';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserEntity)
  async user(@Args('username') username: string) {
    return await this.userService.findByUsername(username);
  }

  @Mutation(() => UserEntity)
  async createOneUser(@Args('userInput') userInput: CreateUserInput) {
    const user = await this.userService.createOneUser(userInput);
    console.log(user);
    return user;
  }
}
