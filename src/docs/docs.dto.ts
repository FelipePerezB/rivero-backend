import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class GradeConnect {
  @Field(() => String, { nullable: false })
  grade!: string;

  @Field(() => ID, { nullable: false })
  id!: number;
}
