import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ScoreUncheckedCreateNestedManyWithoutDocumentInput } from '../score/score-unchecked-create-nested-many-without-document.input';

@InputType()
export class DocUncheckedCreateWithoutGradesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    content!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Int, {nullable:false})
    subjectId!: number;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutDocumentInput, {nullable:true})
    Score?: ScoreUncheckedCreateNestedManyWithoutDocumentInput;
}