import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GradesOnSchoolsAvgAggregate {

    @Field(() => Float, {nullable:true})
    gradeId?: number;

    @Field(() => Float, {nullable:true})
    schoolId?: number;
}
