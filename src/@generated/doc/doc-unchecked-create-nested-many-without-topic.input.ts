import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutTopicInput } from './doc-create-without-topic.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutTopicInput } from './doc-create-or-connect-without-topic.input';
import { DocCreateManyTopicInputEnvelope } from './doc-create-many-topic-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@InputType()
export class DocUncheckedCreateNestedManyWithoutTopicInput {

    @Field(() => [DocCreateWithoutTopicInput], {nullable:true})
    @Type(() => DocCreateWithoutTopicInput)
    create?: Array<DocCreateWithoutTopicInput>;

    @Field(() => [DocCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutTopicInput>;

    @Field(() => DocCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => DocCreateManyTopicInputEnvelope)
    createMany?: DocCreateManyTopicInputEnvelope;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: Array<DocWhereUniqueInput>;
}
