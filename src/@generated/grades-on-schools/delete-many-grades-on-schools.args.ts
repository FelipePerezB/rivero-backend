import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereInput } from './grades-on-schools-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGradesOnSchoolsArgs {

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    @Type(() => GradesOnSchoolsWhereInput)
    where?: GradesOnSchoolsWhereInput;
}
