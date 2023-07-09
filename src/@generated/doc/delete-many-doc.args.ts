import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDocArgs {

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;
}
