import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsUpdateWithoutGradeInput } from './grades-on-schools-update-without-grade.input';

@InputType()
export class GradesOnSchoolsUpdateWithWhereUniqueWithoutGradeInput {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsUpdateWithoutGradeInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateWithoutGradeInput)
    data!: GradesOnSchoolsUpdateWithoutGradeInput;
}
