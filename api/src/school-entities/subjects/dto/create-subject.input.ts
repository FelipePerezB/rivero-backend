import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSubjectInput {
  @IsString()
  @Field()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  color: string;
}
