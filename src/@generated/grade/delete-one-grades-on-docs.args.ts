import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsWhereUniqueInput } from '../grades-on-docs/grades-on-docs-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGradesOnDocsArgs {

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnDocsWhereUniqueInput)
    where!: GradesOnDocsWhereUniqueInput;
}