import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsUpdateWithoutSchoolInput } from './grades-on-schools-update-without-school.input';

@InputType()
export class GradesOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateWithoutSchoolInput)
    data!: GradesOnSchoolsUpdateWithoutSchoolInput;
}
