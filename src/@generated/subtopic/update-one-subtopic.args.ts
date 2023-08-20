import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicUpdateInput } from './subtopic-update.input';
import { Type } from 'class-transformer';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';

@ArgsType()
export class UpdateOneSubtopicArgs {

    @Field(() => SubtopicUpdateInput, {nullable:false})
    @Type(() => SubtopicUpdateInput)
    data!: SubtopicUpdateInput;

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;
}
