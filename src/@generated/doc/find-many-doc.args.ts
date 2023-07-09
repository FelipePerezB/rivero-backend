import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';
import { Type } from 'class-transformer';
import { DocOrderByWithRelationInput } from './doc-order-by-with-relation.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DocScalarFieldEnum } from './doc-scalar-field.enum';

@ArgsType()
export class FindManyDocArgs {

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;

    @Field(() => [DocOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DocOrderByWithRelationInput>;

    @Field(() => DocWhereUniqueInput, {nullable:true})
    cursor?: DocWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DocScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DocScalarFieldEnum>;
}
