import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutSchoolsInput } from './grade-create-or-connect-without-schools.input';
import { GradeUpsertWithWhereUniqueWithoutSchoolsInput } from './grade-upsert-with-where-unique-without-schools.input';
import { GradeCreateManySchoolsInputEnvelope } from './grade-create-many-schools-input-envelope.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { GradeUpdateWithWhereUniqueWithoutSchoolsInput } from './grade-update-with-where-unique-without-schools.input';
import { GradeUpdateManyWithWhereWithoutSchoolsInput } from './grade-update-many-with-where-without-schools.input';
import { GradeScalarWhereInput } from './grade-scalar-where.input';

@InputType()
export class GradeUpdateManyWithoutSchoolsNestedInput {

    @Field(() => [GradeCreateWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create?: Array<GradeCreateWithoutSchoolsInput>;

    @Field(() => [GradeCreateOrConnectWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutSchoolsInput)
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolsInput>;

    @Field(() => [GradeUpsertWithWhereUniqueWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeUpsertWithWhereUniqueWithoutSchoolsInput)
    upsert?: Array<GradeUpsertWithWhereUniqueWithoutSchoolsInput>;

    @Field(() => GradeCreateManySchoolsInputEnvelope, {nullable:true})
    @Type(() => GradeCreateManySchoolsInputEnvelope)
    createMany?: GradeCreateManySchoolsInputEnvelope;

    @Field(() => [GradeWhereUniqueInput], {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    set?: Array<GradeWhereUniqueInput>;

    @Field(() => [GradeWhereUniqueInput], {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    disconnect?: Array<GradeWhereUniqueInput>;

    @Field(() => [GradeWhereUniqueInput], {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    delete?: Array<GradeWhereUniqueInput>;

    @Field(() => [GradeWhereUniqueInput], {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: Array<GradeWhereUniqueInput>;

    @Field(() => [GradeUpdateWithWhereUniqueWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeUpdateWithWhereUniqueWithoutSchoolsInput)
    update?: Array<GradeUpdateWithWhereUniqueWithoutSchoolsInput>;

    @Field(() => [GradeUpdateManyWithWhereWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeUpdateManyWithWhereWithoutSchoolsInput)
    updateMany?: Array<GradeUpdateManyWithWhereWithoutSchoolsInput>;

    @Field(() => [GradeScalarWhereInput], {nullable:true})
    @Type(() => GradeScalarWhereInput)
    deleteMany?: Array<GradeScalarWhereInput>;
}
