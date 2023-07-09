import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsUpdateWithoutSubjectInput } from './subjects-on-schools-update-without-subject.input';
import { SubjectsOnSchoolsCreateWithoutSubjectInput } from './subjects-on-schools-create-without-subject.input';

@InputType()
export class SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSubjectInput {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateWithoutSubjectInput)
    update!: SubjectsOnSchoolsUpdateWithoutSubjectInput;

    @Field(() => SubjectsOnSchoolsCreateWithoutSubjectInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateWithoutSubjectInput)
    create!: SubjectsOnSchoolsCreateWithoutSubjectInput;
}
