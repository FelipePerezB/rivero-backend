import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsUpdateInput } from '../grades-on-docs/grades-on-docs-update.input';
import { Type } from 'class-transformer';
import { GradesOnDocsWhereUniqueInput } from '../grades-on-docs/grades-on-docs-where-unique.input';

@ArgsType()
export class UpdateOneGradesOnDocsArgs {

    @Field(() => GradesOnDocsUpdateInput, {nullable:false})
    @Type(() => GradesOnDocsUpdateInput)
    data!: GradesOnDocsUpdateInput;

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnDocsWhereUniqueInput)
    where!: GradesOnDocsWhereUniqueInput;
}
