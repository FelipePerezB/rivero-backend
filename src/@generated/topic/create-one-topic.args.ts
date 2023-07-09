import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicCreateInput } from './topic-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTopicArgs {

    @Field(() => TopicCreateInput, {nullable:false})
    @Type(() => TopicCreateInput)
    data!: TopicCreateInput;
}
