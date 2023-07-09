import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubjectsOnSchoolsSumAggregate {

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:true})
    schoolId?: number;
}
