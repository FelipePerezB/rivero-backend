import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocUpdateInput } from './doc-update.input';
import { Type } from 'class-transformer';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@ArgsType()
export class UpdateOneDocArgs {

    @Field(() => DocUpdateInput, {nullable:false})
    @Type(() => DocUpdateInput)
    data!: DocUpdateInput;

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;
}
