import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateInput } from './grades-on-schools-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGradesOnSchoolsArgs {

    @Field(() => GradesOnSchoolsCreateInput, {nullable:false})
    @Type(() => GradesOnSchoolsCreateInput)
    data!: GradesOnSchoolsCreateInput;
}
