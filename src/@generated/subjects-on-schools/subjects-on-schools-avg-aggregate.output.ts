import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SubjectsOnSchoolsAvgAggregate {

    @Field(() => Float, {nullable:true})
    subjectId?: number;

    @Field(() => Float, {nullable:true})
    schoolId?: number;
}
