import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsUpdateWithoutSchoolInput } from './subjects-on-schools-update-without-school.input';

@InputType()
export class SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateWithoutSchoolInput)
    data!: SubjectsOnSchoolsUpdateWithoutSchoolInput;
}
