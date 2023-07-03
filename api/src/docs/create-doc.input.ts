import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

@InputType()
export class CreateDocInput {
  @IsString()
  @Field()
  @IsNotEmpty()
  title: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  type: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  content: string;

  @IsPositive()
  @Field()
  @IsNotEmpty()
  subject_id: number;
}
