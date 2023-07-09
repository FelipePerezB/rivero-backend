import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsWhereInput } from '../grades-on-docs/grades-on-docs-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGradesOnDocsArgs {

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    @Type(() => GradesOnDocsWhereInput)
    where?: GradesOnDocsWhereInput;
}
