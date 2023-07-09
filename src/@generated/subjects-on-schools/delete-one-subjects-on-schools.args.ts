import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    where!: SubjectsOnSchoolsWhereUniqueInput;
}
