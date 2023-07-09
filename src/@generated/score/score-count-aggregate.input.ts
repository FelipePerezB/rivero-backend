import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ScoreCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    score?: true;

    @Field(() => Boolean, {nullable:true})
    subjectId?: true;

    @Field(() => Boolean, {nullable:true})
    topicId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    correct?: true;

    @Field(() => Boolean, {nullable:true})
    total?: true;

    @Field(() => Boolean, {nullable:true})
    wrong?: true;

    @Field(() => Boolean, {nullable:true})
    null?: true;

    @Field(() => Boolean, {nullable:true})
    docId?: true;

    @Field(() => Boolean, {nullable:true})
    alternatives?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updateAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
