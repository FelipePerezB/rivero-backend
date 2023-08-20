import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicCreateInput } from './subtopic-create.input';
import { SubtopicUpdateInput } from './subtopic-update.input';

@ArgsType()
export class UpsertOneSubtopicArgs {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicCreateInput, {nullable:false})
    @Type(() => SubtopicCreateInput)
    create!: SubtopicCreateInput;

    @Field(() => SubtopicUpdateInput, {nullable:false})
    @Type(() => SubtopicUpdateInput)
    update!: SubtopicUpdateInput;
}
