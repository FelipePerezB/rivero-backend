import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutSchoolInput } from './grade-create-without-school.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutSchoolInput } from './grade-create-or-connect-without-school.input';
import { GradeUpsertWithWhereUniqueWithoutSchoolInput } from './grade-upsert-with-where-unique-without-school.input';
import { GradeCreateManySchoolInputEnvelope } from './grade-create-many-school-input-envelope.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { GradeUpdateWithWhereUniqueWithoutSchoolInput } from './grade-update-with-where-unique-without-school.input';
import { GradeUpdateManyWithWhereWithoutSchoolInput } from './grade-update-many-with-where-without-school.input';
import { GradeScalarWhereInput } from './grade-scalar-where.input';

@InputType()
export class GradeUpdateManyWithoutSchoolNestedInput {

    @Field(() => [GradeCreateWithoutSchoolInput], {nullable:true})
    @Type(() => GradeCreateWithoutSchoolInput)
    create?: Array<GradeCreateWithoutSchoolInput>;

    @Field(() => [GradeCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolInput>;

    @Field(() => [GradeUpsertWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => GradeUpsertWithWhereUniqueWithoutSchoolInput)
    upsert?: Array<GradeUpsertWithWhereUniqueWithoutSchoolInput>;

    @Field(() => GradeCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => GradeCreateManySchoolInputEnvelope)
    createMany?: GradeCreateManySchoolInputEnvelope;

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

    @Field(() => [GradeUpdateWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => GradeUpdateWithWhereUniqueWithoutSchoolInput)
    update?: Array<GradeUpdateWithWhereUniqueWithoutSchoolInput>;

    @Field(() => [GradeUpdateManyWithWhereWithoutSchoolInput], {nullable:true})
    @Type(() => GradeUpdateManyWithWhereWithoutSchoolInput)
    updateMany?: Array<GradeUpdateManyWithWhereWithoutSchoolInput>;

    @Field(() => [GradeScalarWhereInput], {nullable:true})
    @Type(() => GradeScalarWhereInput)
    deleteMany?: Array<GradeScalarWhereInput>;
}
