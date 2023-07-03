import { CreateInstituteInput } from './create-institute.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInstituteInput extends PartialType(CreateInstituteInput) {
  @Field(() => Int)
  id: number;
}
