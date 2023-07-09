import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsWhereInput } from './subjects-on-schools-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereInput)
    where?: SubjectsOnSchoolsWhereInput;
}
