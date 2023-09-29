import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Privacity } from './privacity.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPrivacityFilter } from './nested-enum-privacity-filter.input';

@InputType()
export class NestedEnumPrivacityWithAggregatesFilter {

    @Field(() => Privacity, {nullable:true})
    equals?: keyof typeof Privacity;

    @Field(() => [Privacity], {nullable:true})
    in?: Array<keyof typeof Privacity>;

    @Field(() => [Privacity], {nullable:true})
    notIn?: Array<keyof typeof Privacity>;

    @Field(() => NestedEnumPrivacityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPrivacityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPrivacityFilter, {nullable:true})
    _min?: NestedEnumPrivacityFilter;

    @Field(() => NestedEnumPrivacityFilter, {nullable:true})
    _max?: NestedEnumPrivacityFilter;
}
