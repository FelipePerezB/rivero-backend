import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubjectAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
