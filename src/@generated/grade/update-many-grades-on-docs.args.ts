import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnDocsUpdateManyMutationInput } from '../grades-on-docs/grades-on-docs-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GradesOnDocsWhereInput } from '../grades-on-docs/grades-on-docs-where.input';

@ArgsType()
export class UpdateManyGradesOnDocsArgs {

    @Field(() => GradesOnDocsUpdateManyMutationInput, {nullable:false})
    @Type(() => GradesOnDocsUpdateManyMutationInput)
    data!: GradesOnDocsUpdateManyMutationInput;

    @Field(() => GradesOnDocsWhereInput, {nullable:true})
    @Type(() => GradesOnDocsWhereInput)
    where?: GradesOnDocsWhereInput;
}
