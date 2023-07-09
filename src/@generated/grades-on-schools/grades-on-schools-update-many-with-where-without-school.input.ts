import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsScalarWhereInput } from './grades-on-schools-scalar-where.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsUpdateManyMutationInput } from './grades-on-schools-update-many-mutation.input';

@InputType()
export class GradesOnSchoolsUpdateManyWithWhereWithoutSchoolInput {

    @Field(() => GradesOnSchoolsScalarWhereInput, {nullable:false})
    @Type(() => GradesOnSchoolsScalarWhereInput)
    where!: GradesOnSchoolsScalarWhereInput;

    @Field(() => GradesOnSchoolsUpdateManyMutationInput, {nullable:false})
    @Type(() => GradesOnSchoolsUpdateManyMutationInput)
    data!: GradesOnSchoolsUpdateManyMutationInput;
}
