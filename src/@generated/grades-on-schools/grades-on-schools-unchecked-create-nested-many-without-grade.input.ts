import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateWithoutGradeInput } from './grades-on-schools-create-without-grade.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateOrConnectWithoutGradeInput } from './grades-on-schools-create-or-connect-without-grade.input';
import { GradesOnSchoolsCreateManyGradeInputEnvelope } from './grades-on-schools-create-many-grade-input-envelope.input';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';

@InputType()
export class GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput {

    @Field(() => [GradesOnSchoolsCreateWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateWithoutGradeInput)
    create?: Array<GradesOnSchoolsCreateWithoutGradeInput>;

    @Field(() => [GradesOnSchoolsCreateOrConnectWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateOrConnectWithoutGradeInput)
    connectOrCreate?: Array<GradesOnSchoolsCreateOrConnectWithoutGradeInput>;

    @Field(() => GradesOnSchoolsCreateManyGradeInputEnvelope, {nullable:true})
    @Type(() => GradesOnSchoolsCreateManyGradeInputEnvelope)
    createMany?: GradesOnSchoolsCreateManyGradeInputEnvelope;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    connect?: Array<GradesOnSchoolsWhereUniqueInput>;
}
