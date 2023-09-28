import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrganizationSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
