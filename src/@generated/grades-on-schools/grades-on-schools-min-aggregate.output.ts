import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GradesOnSchoolsMinAggregate {

    @Field(() => Int, {nullable:true})
    gradeId?: number;

    @Field(() => Int, {nullable:true})
    schoolId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}
