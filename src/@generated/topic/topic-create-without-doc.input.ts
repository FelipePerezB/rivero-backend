import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutTopicsInput } from '../subject/subject-create-nested-one-without-topics.input';
import { ScoreCreateNestedManyWithoutTopicInput } from '../score/score-create-nested-many-without-topic.input';

@InputType()
export class TopicCreateWithoutDocInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutTopicsInput, {nullable:true})
    subject?: SubjectCreateNestedOneWithoutTopicsInput;

    @Field(() => ScoreCreateNestedManyWithoutTopicInput, {nullable:true})
    Score?: ScoreCreateNestedManyWithoutTopicInput;
}