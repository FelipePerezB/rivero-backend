import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateInput } from './subjects-on-schools-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsCreateInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateInput)
    data!: SubjectsOnSchoolsCreateInput;
}
