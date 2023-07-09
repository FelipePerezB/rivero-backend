import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsUpdateWithoutSchoolInput } from './subjects-on-schools-update-without-school.input';
import { SubjectsOnSchoolsCreateWithoutSchoolInput } from './subjects-on-schools-create-without-school.input';

@InputType()
export class SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateWithoutSchoolInput)
    update!: SubjectsOnSchoolsUpdateWithoutSchoolInput;

    @Field(() => SubjectsOnSchoolsCreateWithoutSchoolInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateWithoutSchoolInput)
    create!: SubjectsOnSchoolsCreateWithoutSchoolInput;
}
