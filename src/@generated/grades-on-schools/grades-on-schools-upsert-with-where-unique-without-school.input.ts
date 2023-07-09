import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsUpdateWithoutSchoolInput } from './grades-on-schools-update-without-school.input';
import { GradesOnSchoolsCreateWithoutSchoolInput } from './grades-on-schools-create-without-school.input';

@InputType()
export class GradesOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateWithoutSchoolInput)
    update!: GradesOnSchoolsUpdateWithoutSchoolInput;

    @Field(() => GradesOnSchoolsCreateWithoutSchoolInput, {nullable:false})
    @Type(() => GradesOnSchoolsCreateWithoutSchoolInput)
    create!: GradesOnSchoolsCreateWithoutSchoolInput;
}
