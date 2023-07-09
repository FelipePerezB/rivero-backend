import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGradeInput } from '../user/user-create-nested-many-without-grade.input';
import { GradesOnSchoolsCreateNestedManyWithoutGradeInput } from '../grades-on-schools/grades-on-schools-create-nested-many-without-grade.input';

@InputType()
export class GradeCreateWithoutDocsInput {

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutGradeInput, {nullable:true})
    users?: UserCreateNestedManyWithoutGradeInput;

    @Field(() => GradesOnSchoolsCreateNestedManyWithoutGradeInput, {nullable:true})
    schools?: GradesOnSchoolsCreateNestedManyWithoutGradeInput;
}