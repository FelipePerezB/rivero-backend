import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateWithoutSubjectInput } from './subjects-on-schools-create-without-subject.input';

@InputType()
export class SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsCreateWithoutSubjectInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateWithoutSubjectInput)
    create!: SubjectsOnSchoolsCreateWithoutSubjectInput;
}
