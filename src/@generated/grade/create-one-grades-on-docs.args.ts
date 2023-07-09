import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsCreateInput } from '../grades-on-docs/grades-on-docs-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGradesOnDocsArgs {

    @Field(() => GradesOnDocsCreateInput, {nullable:false})
    @Type(() => GradesOnDocsCreateInput)
    data!: GradesOnDocsCreateInput;
}
