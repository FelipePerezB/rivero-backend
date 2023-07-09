import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicUpdateInput } from './topic-update.input';
import { Type } from 'class-transformer';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@ArgsType()
export class UpdateOneTopicArgs {

    @Field(() => TopicUpdateInput, {nullable:false})
    @Type(() => TopicUpdateInput)
    data!: TopicUpdateInput;

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;
}
