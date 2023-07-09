import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateWithoutSchoolInput } from './grades-on-schools-create-without-school.input';

@InputType()
export class GradesOnSchoolsCreateOrConnectWithoutSchoolInput {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsCreateWithoutSchoolInput, {nullable:false})
    @Type(() => GradesOnSchoolsCreateWithoutSchoolInput)
    create!: GradesOnSchoolsCreateWithoutSchoolInput;
}
