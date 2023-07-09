import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubjectsOnSchoolsCountAggregate {

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updateAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
