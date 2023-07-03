import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @Field()
  @IsNotEmpty()
  nickname: string;

  @IsEmail()
  @Field()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  @Field()
  password: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  role: string;

  @Field(() => Int)
  @IsNotEmpty()
  stars: number;

  @Field(() => Int, { name: 'institute_id' })
  instituteId: number;

  @Field(() => Int, { name: 'grade_id' })
  gradeId: number;
}

import { Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;
}
