import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Types } from './types.enum';
import { NestedEnumTypesWithAggregatesFilter } from './nested-enum-types-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTypesFilter } from './nested-enum-types-filter.input';

@InputType()
export class EnumTypesWithAggregatesFilter {

    @Field(() => Types, {nullable:true})
    equals?: keyof typeof Types;

    @Field(() => [Types], {nullable:true})
    in?: Array<keyof typeof Types>;

    @Field(() => [Types], {nullable:true})
    notIn?: Array<keyof typeof Types>;

    @Field(() => NestedEnumTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTypesFilter, {nullable:true})
    _min?: NestedEnumTypesFilter;

    @Field(() => NestedEnumTypesFilter, {nullable:true})
    _max?: NestedEnumTypesFilter;
}
