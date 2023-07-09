import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateInput } from './doc-create.input';
import { DocUpdateInput } from './doc-update.input';

@ArgsType()
export class UpsertOneDocArgs {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateInput, {nullable:false})
    @Type(() => DocCreateInput)
    create!: DocCreateInput;

    @Field(() => DocUpdateInput, {nullable:false})
    @Type(() => DocUpdateInput)
    update!: DocUpdateInput;
}
