import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateNestedOneWithoutDocsInput } from '../grade/grade-create-nested-one-without-docs.input';

@InputType()
export class GradesOnDocsCreateWithoutDocInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradeCreateNestedOneWithoutDocsInput, {nullable:false})
    grade!: GradeCreateNestedOneWithoutDocsInput;
}
