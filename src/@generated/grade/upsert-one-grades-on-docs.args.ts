import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsWhereUniqueInput } from '../grades-on-docs/grades-on-docs-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnDocsCreateInput } from '../grades-on-docs/grades-on-docs-create.input';
import { GradesOnDocsUpdateInput } from '../grades-on-docs/grades-on-docs-update.input';

@ArgsType()
export class UpsertOneGradesOnDocsArgs {

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnDocsWhereUniqueInput)
    where!: GradesOnDocsWhereUniqueInput;

    @Field(() => GradesOnDocsCreateInput, {nullable:false})
    @Type(() => GradesOnDocsCreateInput)
    create!: GradesOnDocsCreateInput;

    @Field(() => GradesOnDocsUpdateInput, {nullable:false})
    @Type(() => GradesOnDocsUpdateInput)
    update!: GradesOnDocsUpdateInput;
}
