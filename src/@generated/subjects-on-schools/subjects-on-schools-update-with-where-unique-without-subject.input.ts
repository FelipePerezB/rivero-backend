import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsUpdateWithoutSubjectInput } from './subjects-on-schools-update-without-subject.input';

@InputType()
export class SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSubjectInput {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateWithoutSubjectInput)
    data!: SubjectsOnSchoolsUpdateWithoutSubjectInput;
}
