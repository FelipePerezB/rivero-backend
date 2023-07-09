import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateInput } from './subjects-on-schools-create.input';
import { SubjectsOnSchoolsUpdateInput } from './subjects-on-schools-update.input';

@ArgsType()
export class UpsertOneSubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;

    @Field(() => SubjectsOnSchoolsCreateInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateInput)
    create!: SubjectsOnSchoolsCreateInput;

    @Field(() => SubjectsOnSchoolsUpdateInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateInput)
    update!: SubjectsOnSchoolsUpdateInput;
}
