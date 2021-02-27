import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async user(@Args('username') username: string) {
    return await this.userService.findByUsername(username);
  }

  @Mutation(() => User)
  async createOneUser(@Args('userInput') userInput: UserInput) {
    const user = await this.userService.createOneUser(userInput);
    console.log(user);
    return user;
  }
}
