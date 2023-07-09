import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateNestedOneWithoutGradesInput } from '../doc/doc-create-nested-one-without-grades.input';

@InputType()
export class GradesOnDocsCreateWithoutGradeInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => DocCreateNestedOneWithoutGradesInput, {nullable:false})
    doc!: DocCreateNestedOneWithoutGradesInput;
}
