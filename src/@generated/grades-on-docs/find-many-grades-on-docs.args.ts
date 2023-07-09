import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsWhereInput } from './grades-on-docs-where.input';
import { Type } from 'class-transformer';
import { GradesOnDocsOrderByWithRelationInput } from './grades-on-docs-order-by-with-relation.input';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GradesOnDocsScalarFieldEnum } from './grades-on-docs-scalar-field.enum';

@ArgsType()
export class FindManyGradesOnDocsArgs {

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

    @Field(() => [GradesOnDocsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GradesOnDocsScalarFieldEnum>;
}
