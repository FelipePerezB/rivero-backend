import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicCreateManyInput } from './subtopic-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubtopicArgs {

    @Field(() => [SubtopicCreateManyInput], {nullable:false})
    @Type(() => SubtopicCreateManyInput)
    data!: Array<SubtopicCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
