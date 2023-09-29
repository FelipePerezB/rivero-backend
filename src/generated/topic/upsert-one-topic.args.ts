import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateInput } from './topic-create.input';
import { TopicUpdateInput } from './topic-update.input';

@ArgsType()
export class UpsertOneTopicArgs {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateInput, {nullable:false})
    @Type(() => TopicCreateInput)
    create!: TopicCreateInput;

    @Field(() => TopicUpdateInput, {nullable:false})
    @Type(() => TopicUpdateInput)
    update!: TopicUpdateInput;
}
