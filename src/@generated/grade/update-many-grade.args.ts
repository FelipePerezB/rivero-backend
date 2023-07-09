import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeUpdateManyMutationInput } from './grade-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GradeWhereInput } from './grade-where.input';

@ArgsType()
export class UpdateManyGradeArgs {

    @Field(() => GradeUpdateManyMutationInput, {nullable:false})
    @Type(() => GradeUpdateManyMutationInput)
    data!: GradeUpdateManyMutationInput;

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;
}
