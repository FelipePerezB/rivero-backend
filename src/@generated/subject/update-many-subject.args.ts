import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectUpdateManyMutationInput } from './subject-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubjectWhereInput } from './subject-where.input';

@ArgsType()
export class UpdateManySubjectArgs {

    @Field(() => SubjectUpdateManyMutationInput, {nullable:false})
    @Type(() => SubjectUpdateManyMutationInput)
    data!: SubjectUpdateManyMutationInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;
}
