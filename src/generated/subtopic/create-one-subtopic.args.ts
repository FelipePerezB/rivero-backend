import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicCreateInput } from './subtopic-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubtopicArgs {

    @Field(() => SubtopicCreateInput, {nullable:false})
    @Type(() => SubtopicCreateInput)
    data!: SubtopicCreateInput;
}
