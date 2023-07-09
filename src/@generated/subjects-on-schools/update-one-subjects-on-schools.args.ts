import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsUpdateInput } from './subjects-on-schools-update.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';

@ArgsType()
export class UpdateOneSubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsUpdateInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateInput)
    data!: SubjectsOnSchoolsUpdateInput;

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;
}
