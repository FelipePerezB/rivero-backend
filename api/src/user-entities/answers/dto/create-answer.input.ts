import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAnswerInput {
  @IsString()
  @Field()
  @IsNotEmpty()
  answers: string;

  @IsNotEmpty()
  @Field(() => Int)
  user_id: number;

  @IsNotEmpty()
  @Field(() => Int)
  document_id: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  score: number;
}
