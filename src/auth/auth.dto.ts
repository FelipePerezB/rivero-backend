import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user-entities/users/user.entity';

@InputType()
export class LoginUserInput {
  @Field(() => String)
  email?: string;
  @Field(() => String)
  password: string;
}

@ObjectType()
export class LoginResult {
  @Field(() => User)
  user: User;
  @Field(() => String)
  token: string;
}
