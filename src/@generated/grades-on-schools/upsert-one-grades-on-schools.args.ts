import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateInput } from './grades-on-schools-create.input';
import { GradesOnSchoolsUpdateInput } from './grades-on-schools-update.input';

@ArgsType()
export class UpsertOneGradesOnSchoolsArgs {

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    where!: GradesOnSchoolsWhereUniqueInput;

    @Field(() => GradesOnSchoolsCreateInput, {nullable:false})
    @Type(() => GradesOnSchoolsCreateInput)
    create!: GradesOnSchoolsCreateInput;

    @Field(() => GradesOnSchoolsUpdateInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateInput)
    update!: GradesOnSchoolsUpdateInput;
}
