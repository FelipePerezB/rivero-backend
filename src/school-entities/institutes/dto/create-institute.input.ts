import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateInstituteInput {
  @IsString()
  @Field()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Field(() => Int)
  subject_id: number;
}
