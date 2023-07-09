import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class GradesOnSchoolsGradeIdSchoolIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;
}
