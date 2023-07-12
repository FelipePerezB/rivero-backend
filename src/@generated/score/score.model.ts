import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Doc } from '../doc/doc.model';

@ObjectType()
export class Score {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    alternatives!: string;

    @Field(() => Int, {nullable:false})
    docId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Doc, {nullable:false})
    document?: Doc;
}
