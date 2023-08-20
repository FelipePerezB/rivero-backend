import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutDocsInput } from './topic-create-without-docs.input';

@InputType()
export class TopicCreateOrConnectWithoutDocsInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutDocsInput, {nullable:false})
    @Type(() => TopicCreateWithoutDocsInput)
    create!: TopicCreateWithoutDocsInput;
}
