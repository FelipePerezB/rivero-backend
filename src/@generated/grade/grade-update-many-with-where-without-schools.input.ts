import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeScalarWhereInput } from './grade-scalar-where.input';
import { Type } from 'class-transformer';
import { GradeUpdateManyMutationInput } from './grade-update-many-mutation.input';

@InputType()
export class GradeUpdateManyWithWhereWithoutSchoolsInput {

    @Field(() => GradeScalarWhereInput, {nullable:false})
    @Type(() => GradeScalarWhereInput)
    where!: GradeScalarWhereInput;

    @Field(() => GradeUpdateManyMutationInput, {nullable:false})
    @Type(() => GradeUpdateManyMutationInput)
    data!: GradeUpdateManyMutationInput;
}
