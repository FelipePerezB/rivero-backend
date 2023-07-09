import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutGradeInput } from '../user/user-unchecked-create-nested-many-without-grade.input';
import { GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput } from '../grades-on-docs/grades-on-docs-unchecked-create-nested-many-without-grade.input';

@InputType()
export class GradeUncheckedCreateWithoutSchoolsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutGradeInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutGradeInput;

    @Field(() => GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput, {nullable:true})
    docs?: GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput;
}
