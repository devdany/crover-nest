import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly username!: string;
  @Field()
  readonly password!: string;
}
