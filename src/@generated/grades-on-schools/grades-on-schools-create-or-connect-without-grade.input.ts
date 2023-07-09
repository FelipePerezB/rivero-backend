import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateWithoutGradeInput } from './grades-on-schools-create-without-grade.input';

@InputType()
export class GradesOnSchoolsCreateOrConnectWithoutGradeInput {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsCreateWithoutGradeInput, {nullable:false})
    @Type(() => GradesOnSchoolsCreateWithoutGradeInput)
    create!: GradesOnSchoolsCreateWithoutGradeInput;
}
