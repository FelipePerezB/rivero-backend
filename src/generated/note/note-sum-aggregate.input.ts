import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NoteSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    subjectId?: true;

    @Field(() => Boolean, {nullable:true})
    topicId?: true;

    @Field(() => Boolean, {nullable:true})
    subtopicId?: true;

    @Field(() => Boolean, {nullable:true})
    fileId?: true;
}
