import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnDocsUpdateWithoutDocInput } from './grades-on-docs-update-without-doc.input';

@InputType()
export class GradesOnDocsUpdateWithWhereUniqueWithoutDocInput {

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnDocsWhereUniqueInput)
    where!: GradesOnDocsWhereUniqueInput;

    @Field(() => GradesOnDocsUpdateWithoutDocInput, {nullable:false})
    @Type(() => GradesOnDocsUpdateWithoutDocInput)
    data!: GradesOnDocsUpdateWithoutDocInput;
}
