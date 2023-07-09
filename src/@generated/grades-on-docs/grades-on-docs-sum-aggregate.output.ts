import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GradesOnDocsSumAggregate {

    @Field(() => Int, {nullable:true})
    docId?: number;

    @Field(() => Int, {nullable:true})
    gradeId?: number;
}
