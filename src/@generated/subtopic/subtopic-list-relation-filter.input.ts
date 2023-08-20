import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';

@InputType()
export class SubtopicListRelationFilter {

    @Field(() => SubtopicWhereInput, {nullable:true})
    every?: SubtopicWhereInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    some?: SubtopicWhereInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    none?: SubtopicWhereInput;
}
