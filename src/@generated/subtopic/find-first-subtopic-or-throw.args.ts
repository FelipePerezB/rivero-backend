import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicOrderByWithRelationInput } from './subtopic-order-by-with-relation.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubtopicScalarFieldEnum } from './subtopic-scalar-field.enum';

@ArgsType()
export class FindFirstSubtopicOrThrowArgs {

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;

    @Field(() => [SubtopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubtopicOrderByWithRelationInput>;

    @Field(() => SubtopicWhereUniqueInput, {nullable:true})
    cursor?: SubtopicWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubtopicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubtopicScalarFieldEnum>;
}
