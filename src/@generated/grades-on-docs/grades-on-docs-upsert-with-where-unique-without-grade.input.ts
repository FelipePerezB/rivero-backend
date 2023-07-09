import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';
import { Type } from 'class-transformer';
import { GradesOnDocsUpdateWithoutGradeInput } from './grades-on-docs-update-without-grade.input';
import { GradesOnDocsCreateWithoutGradeInput } from './grades-on-docs-create-without-grade.input';

@InputType()
export class GradesOnDocsUpsertWithWhereUniqueWithoutGradeInput {

    @Field(() => GradesOnDocsWhereUniqueInput, {nullable:false})
    @Type(() => GradesOnDocsWhereUniqueInput)
    where!: GradesOnDocsWhereUniqueInput;

    @Field(() => GradesOnDocsUpdateWithoutGradeInput, {nullable:false})
    @Type(() => GradesOnDocsUpdateWithoutGradeInput)
    update!: GradesOnDocsUpdateWithoutGradeInput;

    @Field(() => GradesOnDocsCreateWithoutGradeInput, {nullable:false})
    @Type(() => GradesOnDocsCreateWithoutGradeInput)
    create!: GradesOnDocsCreateWithoutGradeInput;
}
