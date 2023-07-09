import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutDocInput } from './topic-create-without-doc.input';

@InputType()
export class TopicCreateOrConnectWithoutDocInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutDocInput, {nullable:false})
    @Type(() => TopicCreateWithoutDocInput)
    create!: TopicCreateWithoutDocInput;
}
