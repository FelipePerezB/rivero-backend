import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutSubjectInput } from './doc-create-without-subject.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutSubjectInput } from './doc-create-or-connect-without-subject.input';
import { DocUpsertWithWhereUniqueWithoutSubjectInput } from './doc-upsert-with-where-unique-without-subject.input';
import { DocCreateManySubjectInputEnvelope } from './doc-create-many-subject-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { DocUpdateWithWhereUniqueWithoutSubjectInput } from './doc-update-with-where-unique-without-subject.input';
import { DocUpdateManyWithWhereWithoutSubjectInput } from './doc-update-many-with-where-without-subject.input';
import { DocScalarWhereInput } from './doc-scalar-where.input';

@InputType()
export class DocUncheckedUpdateManyWithoutSubjectNestedInput {

    @Field(() => [DocCreateWithoutSubjectInput], {nullable:true})
    @Type(() => DocCreateWithoutSubjectInput)
    create?: Array<DocCreateWithoutSubjectInput>;

    @Field(() => [DocCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutSubjectInput>;

    @Field(() => [DocUpsertWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => DocUpsertWithWhereUniqueWithoutSubjectInput)
    upsert?: Array<DocUpsertWithWhereUniqueWithoutSubjectInput>;

    @Field(() => DocCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => DocCreateManySubjectInputEnvelope)
    createMany?: DocCreateManySubjectInputEnvelope;

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

    @Field(() => [DocUpdateWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => DocUpdateWithWhereUniqueWithoutSubjectInput)
    update?: Array<DocUpdateWithWhereUniqueWithoutSubjectInput>;

    @Field(() => [DocUpdateManyWithWhereWithoutSubjectInput], {nullable:true})
    @Type(() => DocUpdateManyWithWhereWithoutSubjectInput)
    updateMany?: Array<DocUpdateManyWithWhereWithoutSubjectInput>;

    @Field(() => [DocScalarWhereInput], {nullable:true})
    @Type(() => DocScalarWhereInput)
    deleteMany?: Array<DocScalarWhereInput>;
}
