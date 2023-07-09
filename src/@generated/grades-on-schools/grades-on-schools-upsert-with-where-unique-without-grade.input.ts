import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsUpdateWithoutGradeInput } from './grades-on-schools-update-without-grade.input';
import { GradesOnSchoolsCreateWithoutGradeInput } from './grades-on-schools-create-without-grade.input';

@InputType()
export class GradesOnSchoolsUpsertWithWhereUniqueWithoutGradeInput {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsUpdateWithoutGradeInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateWithoutGradeInput)
    update!: GradesOnSchoolsUpdateWithoutGradeInput;

    @Field(() => GradesOnSchoolsCreateWithoutGradeInput, {nullable:false})
    @Type(() => GradesOnSchoolsCreateWithoutGradeInput)
    create!: GradesOnSchoolsCreateWithoutGradeInput;
}
