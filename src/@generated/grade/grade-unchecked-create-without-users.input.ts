import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput } from '../grades-on-schools/grades-on-schools-unchecked-create-nested-many-without-grade.input';

@InputType()
export class GradeUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput, {nullable:true})
    Schools?: GradesOnSchoolsUncheckedCreateNestedManyWithoutGradeInput;
}
