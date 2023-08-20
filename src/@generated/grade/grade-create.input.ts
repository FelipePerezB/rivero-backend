import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGradeInput } from '../user/user-create-nested-many-without-grade.input';
import { GradesOnSchoolsCreateNestedManyWithoutGradeInput } from '../grades-on-schools/grades-on-schools-create-nested-many-without-grade.input';

@InputType()
export class GradeCreateInput {

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutGradeInput, {nullable:true})
    Users?: UserCreateNestedManyWithoutGradeInput;

    @Field(() => GradesOnSchoolsCreateNestedManyWithoutGradeInput, {nullable:true})
    Schools?: GradesOnSchoolsCreateNestedManyWithoutGradeInput;
}
