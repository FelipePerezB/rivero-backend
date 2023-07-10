import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocScalarWhereInput } from './doc-scalar-where.input';
import { Type } from 'class-transformer';
import { DocUpdateManyMutationInput } from './doc-update-many-mutation.input';

@InputType()
export class DocUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => DocScalarWhereInput, {nullable:false})
    @Type(() => DocScalarWhereInput)
    where!: DocScalarWhereInput;

    @Field(() => DocUpdateManyMutationInput, {nullable:false})
    @Type(() => DocUpdateManyMutationInput)
    data!: DocUpdateManyMutationInput;
}
