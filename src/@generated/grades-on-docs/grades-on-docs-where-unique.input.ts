import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsGradeIdDocIdCompoundUniqueInput } from './grades-on-docs-grade-id-doc-id-compound-unique.input';

@InputType()
export class GradesOnDocsWhereUniqueInput {

    @Field(() => GradesOnDocsGradeIdDocIdCompoundUniqueInput, {nullable:true})
    gradeId_docId?: GradesOnDocsGradeIdDocIdCompoundUniqueInput;
}
