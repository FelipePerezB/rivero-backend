import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicUpdateManyMutationInput } from './topic-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TopicWhereInput } from './topic-where.input';

@ArgsType()
export class UpdateManyTopicArgs {

    @Field(() => TopicUpdateManyMutationInput, {nullable:false})
    @Type(() => TopicUpdateManyMutationInput)
    data!: TopicUpdateManyMutationInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;
}
