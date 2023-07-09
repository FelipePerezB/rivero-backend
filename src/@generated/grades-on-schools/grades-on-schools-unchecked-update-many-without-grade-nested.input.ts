import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateWithoutGradeInput } from './grades-on-schools-create-without-grade.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateOrConnectWithoutGradeInput } from './grades-on-schools-create-or-connect-without-grade.input';
import { GradesOnSchoolsUpsertWithWhereUniqueWithoutGradeInput } from './grades-on-schools-upsert-with-where-unique-without-grade.input';
import { GradesOnSchoolsCreateManyGradeInputEnvelope } from './grades-on-schools-create-many-grade-input-envelope.input';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { GradesOnSchoolsUpdateWithWhereUniqueWithoutGradeInput } from './grades-on-schools-update-with-where-unique-without-grade.input';
import { GradesOnSchoolsUpdateManyWithWhereWithoutGradeInput } from './grades-on-schools-update-many-with-where-without-grade.input';
import { GradesOnSchoolsScalarWhereInput } from './grades-on-schools-scalar-where.input';

@InputType()
export class GradesOnSchoolsUncheckedUpdateManyWithoutGradeNestedInput {

    @Field(() => [GradesOnSchoolsCreateWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateWithoutGradeInput)
    create?: Array<GradesOnSchoolsCreateWithoutGradeInput>;

    @Field(() => [GradesOnSchoolsCreateOrConnectWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateOrConnectWithoutGradeInput)
    connectOrCreate?: Array<GradesOnSchoolsCreateOrConnectWithoutGradeInput>;

    @Field(() => [GradesOnSchoolsUpsertWithWhereUniqueWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsUpsertWithWhereUniqueWithoutGradeInput)
    upsert?: Array<GradesOnSchoolsUpsertWithWhereUniqueWithoutGradeInput>;

    @Field(() => GradesOnSchoolsCreateManyGradeInputEnvelope, {nullable:true})
    @Type(() => GradesOnSchoolsCreateManyGradeInputEnvelope)
    createMany?: GradesOnSchoolsCreateManyGradeInputEnvelope;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    set?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    disconnect?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    delete?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    connect?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsUpdateWithWhereUniqueWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsUpdateWithWhereUniqueWithoutGradeInput)
    update?: Array<GradesOnSchoolsUpdateWithWhereUniqueWithoutGradeInput>;

    @Field(() => [GradesOnSchoolsUpdateManyWithWhereWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsUpdateManyWithWhereWithoutGradeInput)
    updateMany?: Array<GradesOnSchoolsUpdateManyWithWhereWithoutGradeInput>;

    @Field(() => [GradesOnSchoolsScalarWhereInput], {nullable:true})
    @Type(() => GradesOnSchoolsScalarWhereInput)
    deleteMany?: Array<GradesOnSchoolsScalarWhereInput>;
}
