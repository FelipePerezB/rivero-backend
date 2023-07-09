import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    stars?: true;

    @Field(() => Boolean, {nullable:true})
    gradeId?: true;

    @Field(() => Boolean, {nullable:true})
    schoolId?: true;
}