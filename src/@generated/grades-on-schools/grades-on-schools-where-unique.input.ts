import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput } from './grades-on-schools-grade-id-school-id-compound-unique.input';
import { GradesOnSchoolsWhereInput } from './grades-on-schools-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { GradeRelationFilter } from '../grade/grade-relation-filter.input';

@InputType()
export class GradesOnSchoolsWhereUniqueInput {

    @Field(() => GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput, {nullable:true})
    gradeId_schoolId?: GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput;

    @Field(() => [GradesOnSchoolsWhereInput], {nullable:true})
    AND?: Array<GradesOnSchoolsWhereInput>;

    @Field(() => [GradesOnSchoolsWhereInput], {nullable:true})
    OR?: Array<GradesOnSchoolsWhereInput>;

    @Field(() => [GradesOnSchoolsWhereInput], {nullable:true})
    NOT?: Array<GradesOnSchoolsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    gradeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => GradeRelationFilter, {nullable:true})
    Grade?: GradeRelationFilter;
}
