import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { DocTypes } from '../prisma/doc-types.enum';

@InputType()
export class DocCreateManySubtopicInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Privacity, {nullable:false})
    privacity!: keyof typeof Privacity;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DocTypes, {nullable:false})
    type!: keyof typeof DocTypes;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;
}