import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutDocsInput } from './topic-create-without-docs.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutDocsInput } from './topic-create-or-connect-without-docs.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@InputType()
export class TopicCreateNestedOneWithoutDocsInput {

    @Field(() => TopicCreateWithoutDocsInput, {nullable:true})
    @Type(() => TopicCreateWithoutDocsInput)
    create?: TopicCreateWithoutDocsInput;

    @Field(() => TopicCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutDocsInput)
    connectOrCreate?: TopicCreateOrConnectWithoutDocsInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;
}
