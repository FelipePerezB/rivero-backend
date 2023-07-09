import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsWhereInput } from '../grades-on-docs/grades-on-docs-where.input';
import { Type } from 'class-transformer';
import { GradesOnDocsOrderByWithRelationInput } from '../grades-on-docs/grades-on-docs-order-by-with-relation.input';
import { GradesOnDocsWhereUniqueInput } from '../grades-on-docs/grades-on-docs-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateGradesOnDocsArgs {

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    @Type(() => GradesOnDocsWhereInput)
    where?: GradesOnDocsWhereInput;

    @Field(() => [GradesOnDocsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GradesOnDocsOrderByWithRelationInput>;

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:true})
    cursor?: GradesOnDocsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
