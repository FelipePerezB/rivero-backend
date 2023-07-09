import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutTopicInput } from './doc-create-without-topic.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutTopicInput } from './doc-create-or-connect-without-topic.input';
import { DocUpsertWithWhereUniqueWithoutTopicInput } from './doc-upsert-with-where-unique-without-topic.input';
import { DocCreateManyTopicInputEnvelope } from './doc-create-many-topic-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { DocUpdateWithWhereUniqueWithoutTopicInput } from './doc-update-with-where-unique-without-topic.input';
import { DocUpdateManyWithWhereWithoutTopicInput } from './doc-update-many-with-where-without-topic.input';
import { DocScalarWhereInput } from './doc-scalar-where.input';

@InputType()
export class DocUpdateManyWithoutTopicNestedInput {

    @Field(() => [DocCreateWithoutTopicInput], {nullable:true})
    @Type(() => DocCreateWithoutTopicInput)
    create?: Array<DocCreateWithoutTopicInput>;

    @Field(() => [DocCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutTopicInput>;

    @Field(() => [DocUpsertWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => DocUpsertWithWhereUniqueWithoutTopicInput)
    upsert?: Array<DocUpsertWithWhereUniqueWithoutTopicInput>;

    @Field(() => DocCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => DocCreateManyTopicInputEnvelope)
    createMany?: DocCreateManyTopicInputEnvelope;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    set?: Array<DocWhereUniqueInput>;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    disconnect?: Array<DocWhereUniqueInput>;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    delete?: Array<DocWhereUniqueInput>;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: Array<DocWhereUniqueInput>;

    @Field(() => [DocUpdateWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => DocUpdateWithWhereUniqueWithoutTopicInput)
    update?: Array<DocUpdateWithWhereUniqueWithoutTopicInput>;

    @Field(() => [DocUpdateManyWithWhereWithoutTopicInput], {nullable:true})
    @Type(() => DocUpdateManyWithWhereWithoutTopicInput)
    updateMany?: Array<DocUpdateManyWithWhereWithoutTopicInput>;

    @Field(() => [DocScalarWhereInput], {nullable:true})
    @Type(() => DocScalarWhereInput)
    deleteMany?: Array<DocScalarWhereInput>;
}
