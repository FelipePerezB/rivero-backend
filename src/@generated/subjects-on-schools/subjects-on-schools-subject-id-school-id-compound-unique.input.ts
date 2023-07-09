import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SubjectsOnSchoolsSubjectIdSchoolIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;
}
