import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateWithoutSchoolInput } from './subjects-on-schools-create-without-school.input';

@InputType()
export class SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsCreateWithoutSchoolInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateWithoutSchoolInput)
    create!: SubjectsOnSchoolsCreateWithoutSchoolInput;
}
