import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutSubtopicInput } from './doc-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutSubtopicInput } from './doc-create-or-connect-without-subtopic.input';
import { DocUpsertWithWhereUniqueWithoutSubtopicInput } from './doc-upsert-with-where-unique-without-subtopic.input';
import { DocCreateManySubtopicInputEnvelope } from './doc-create-many-subtopic-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { DocUpdateWithWhereUniqueWithoutSubtopicInput } from './doc-update-with-where-unique-without-subtopic.input';
import { DocUpdateManyWithWhereWithoutSubtopicInput } from './doc-update-many-with-where-without-subtopic.input';
import { DocScalarWhereInput } from './doc-scalar-where.input';

@InputType()
export class DocUncheckedUpdateManyWithoutSubtopicNestedInput {

    @Field(() => [DocCreateWithoutSubtopicInput], {nullable:true})
    @Type(() => DocCreateWithoutSubtopicInput)
    create?: Array<DocCreateWithoutSubtopicInput>;

    @Field(() => [DocCreateOrConnectWithoutSubtopicInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutSubtopicInput>;

    @Field(() => [DocUpsertWithWhereUniqueWithoutSubtopicInput], {nullable:true})
    @Type(() => DocUpsertWithWhereUniqueWithoutSubtopicInput)
    upsert?: Array<DocUpsertWithWhereUniqueWithoutSubtopicInput>;

    @Field(() => DocCreateManySubtopicInputEnvelope, {nullable:true})
    @Type(() => DocCreateManySubtopicInputEnvelope)
    createMany?: DocCreateManySubtopicInputEnvelope;

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

    @Field(() => [DocUpdateWithWhereUniqueWithoutSubtopicInput], {nullable:true})
    @Type(() => DocUpdateWithWhereUniqueWithoutSubtopicInput)
    update?: Array<DocUpdateWithWhereUniqueWithoutSubtopicInput>;

    @Field(() => [DocUpdateManyWithWhereWithoutSubtopicInput], {nullable:true})
    @Type(() => DocUpdateManyWithWhereWithoutSubtopicInput)
    updateMany?: Array<DocUpdateManyWithWhereWithoutSubtopicInput>;

    @Field(() => [DocScalarWhereInput], {nullable:true})
    @Type(() => DocScalarWhereInput)
    deleteMany?: Array<DocScalarWhereInput>;
}
