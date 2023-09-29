import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereInput } from '../subtopic/subtopic-where.input';

@InputType()
export class SubtopicNullableRelationFilter {

    @Field(() => SubtopicWhereInput, {nullable:true})
    is?: SubtopicWhereInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    isNot?: SubtopicWhereInput;
}
