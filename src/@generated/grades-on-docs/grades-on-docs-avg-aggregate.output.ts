import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GradesOnDocsAvgAggregate {

    @Field(() => Float, {nullable:true})
    docId?: number;

    @Field(() => Float, {nullable:true})
    gradeId?: number;
}
