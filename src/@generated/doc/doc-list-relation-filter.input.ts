import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';

@InputType()
export class DocListRelationFilter {

    @Field(() => DocWhereInput, {nullable:true})
    every?: DocWhereInput;

    @Field(() => DocWhereInput, {nullable:true})
    some?: DocWhereInput;

    @Field(() => DocWhereInput, {nullable:true})
    none?: DocWhereInput;
}
