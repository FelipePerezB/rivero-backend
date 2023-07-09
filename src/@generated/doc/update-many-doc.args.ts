import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocUpdateManyMutationInput } from './doc-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DocWhereInput } from './doc-where.input';

@ArgsType()
export class UpdateManyDocArgs {

    @Field(() => DocUpdateManyMutationInput, {nullable:false})
    @Type(() => DocUpdateManyMutationInput)
    data!: DocUpdateManyMutationInput;

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;
}
