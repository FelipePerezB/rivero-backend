import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsUpdateManyMutationInput } from './grades-on-schools-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsWhereInput } from './grades-on-schools-where.input';

@ArgsType()
export class UpdateManyGradesOnSchoolsArgs {

    @Field(() => GradesOnSchoolsUpdateManyMutationInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateManyMutationInput)
    data!: GradesOnSchoolsUpdateManyMutationInput;

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    @Type(() => GradesOnSchoolsWhereInput)
    where?: GradesOnSchoolsWhereInput;
}
