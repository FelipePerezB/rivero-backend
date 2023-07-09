import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnDocsCreateWithoutDocInput } from './grades-on-docs-create-without-doc.input';

@InputType()
export class GradesOnDocsCreateOrConnectWithoutDocInput {

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnDocsWhereUniqueInput)
    where!: GradesOnDocsWhereUniqueInput;

    @Field(() => GradesOnDocsCreateWithoutDocInput, {nullable:false})
    @Type(() => GradesOnDocsCreateWithoutDocInput)
    create!: GradesOnDocsCreateWithoutDocInput;
}
