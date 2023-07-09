import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsWhereInput } from './grades-on-docs-where.input';

@InputType()
export class GradesOnDocsListRelationFilter {

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    every?: GradesOnDocsWhereInput;

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    some?: GradesOnDocsWhereInput;

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    none?: GradesOnDocsWhereInput;
}
