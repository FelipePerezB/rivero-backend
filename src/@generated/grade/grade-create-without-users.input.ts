import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateNestedManyWithoutGradeInput } from '../grades-on-schools/grades-on-schools-create-nested-many-without-grade.input';

@InputType()
export class GradeCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradesOnSchoolsCreateNestedManyWithoutGradeInput, {nullable:true})
    Schools?: GradesOnSchoolsCreateNestedManyWithoutGradeInput;
}
