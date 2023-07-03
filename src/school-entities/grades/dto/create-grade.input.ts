import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateGradeInput {
  @IsString()
  @Field()
  @IsNotEmpty()
  grade: string;

  @Field(() => Int, { name: 'institute_id' })
  @IsNotEmpty()
  instituteId: number;
}
