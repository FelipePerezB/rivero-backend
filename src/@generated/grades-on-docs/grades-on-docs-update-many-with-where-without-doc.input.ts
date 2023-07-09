import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsScalarWhereInput } from './grades-on-docs-scalar-where.input';
import { Type } from 'class-transformer';
import { GradesOnDocsUpdateManyMutationInput } from './grades-on-docs-update-many-mutation.input';

@InputType()
export class GradesOnDocsUpdateManyWithWhereWithoutDocInput {

    @Field(() => GradesOnDocsScalarWhereInput, {nullable:false})
    @Type(() => GradesOnDocsScalarWhereInput)
    where!: GradesOnDocsScalarWhereInput;

    @Field(() => GradesOnDocsUpdateManyMutationInput, {nullable:false})
    @Type(() => GradesOnDocsUpdateManyMutationInput)
    data!: GradesOnDocsUpdateManyMutationInput;
}
