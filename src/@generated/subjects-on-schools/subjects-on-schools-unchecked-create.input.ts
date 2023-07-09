import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SubjectsOnSchoolsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}
