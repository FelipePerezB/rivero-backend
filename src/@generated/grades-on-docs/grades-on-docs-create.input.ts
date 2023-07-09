import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateNestedOneWithoutGradesInput } from '../doc/doc-create-nested-one-without-grades.input';
import { GradeCreateNestedOneWithoutDocsInput } from '../grade/grade-create-nested-one-without-docs.input';

@InputType()
export class GradesOnDocsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => DocCreateNestedOneWithoutGradesInput, {nullable:false})
    doc!: DocCreateNestedOneWithoutGradesInput;

    @Field(() => GradeCreateNestedOneWithoutDocsInput, {nullable:false})
    grade!: GradeCreateNestedOneWithoutDocsInput;
}
