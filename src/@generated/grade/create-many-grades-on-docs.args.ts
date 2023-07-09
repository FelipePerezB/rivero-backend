import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsCreateManyInput } from '../grades-on-docs/grades-on-docs-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGradesOnDocsArgs {

    @Field(() => [GradesOnDocsCreateManyInput], {nullable:false})
    @Type(() => GradesOnDocsCreateManyInput)
    data!: Array<GradesOnDocsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
