import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsUpdateInput } from './grades-on-schools-update.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';

@ArgsType()
export class UpdateOneGradesOnSchoolsArgs {

    @Field(() => GradesOnSchoolsUpdateInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateInput)
    data!: GradesOnSchoolsUpdateInput;

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;
}
