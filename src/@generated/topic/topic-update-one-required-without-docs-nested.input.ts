import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutDocsInput } from './topic-create-without-docs.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutDocsInput } from './topic-create-or-connect-without-docs.input';
import { TopicUpsertWithoutDocsInput } from './topic-upsert-without-docs.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateToOneWithWhereWithoutDocsInput } from './topic-update-to-one-with-where-without-docs.input';

@InputType()
export class TopicUpdateOneRequiredWithoutDocsNestedInput {

    @Field(() => TopicCreateWithoutDocsInput, {nullable:true})
    @Type(() => TopicCreateWithoutDocsInput)
    create?: TopicCreateWithoutDocsInput;

    @Field(() => TopicCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutDocsInput)
    connectOrCreate?: TopicCreateOrConnectWithoutDocsInput;

    @Field(() => TopicUpsertWithoutDocsInput, {nullable:true})
    @Type(() => TopicUpsertWithoutDocsInput)
    upsert?: TopicUpsertWithoutDocsInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;

    @Field(() => TopicUpdateToOneWithWhereWithoutDocsInput, {nullable:true})
    @Type(() => TopicUpdateToOneWithWhereWithoutDocsInput)
    update?: TopicUpdateToOneWithWhereWithoutDocsInput;
}
