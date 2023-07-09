import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GradesOnDocsMinAggregate {

    @Field(() => Int, {nullable:true})
    docId?: number;

    @Field(() => Int, {nullable:true})
    gradeId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}
