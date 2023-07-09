import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';

@InputType()
export class DocRelationFilter {

    @Field(() => DocWhereInput, {nullable:true})
    is?: DocWhereInput;

    @Field(() => DocWhereInput, {nullable:true})
    isNot?: DocWhereInput;
}
