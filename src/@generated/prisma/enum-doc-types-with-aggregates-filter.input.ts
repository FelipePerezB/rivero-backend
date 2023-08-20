import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocTypes } from './doc-types.enum';
import { NestedEnumDocTypesWithAggregatesFilter } from './nested-enum-doc-types-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDocTypesFilter } from '../doc/nested-enum-doc-types-filter.input';

@InputType()
export class EnumDocTypesWithAggregatesFilter {

    @Field(() => DocTypes, {nullable:true})
    equals?: keyof typeof DocTypes;

    @Field(() => [DocTypes], {nullable:true})
    in?: Array<keyof typeof DocTypes>;

    @Field(() => [DocTypes], {nullable:true})
    notIn?: Array<keyof typeof DocTypes>;

    @Field(() => NestedEnumDocTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDocTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDocTypesFilter, {nullable:true})
    _min?: NestedEnumDocTypesFilter;

    @Field(() => NestedEnumDocTypesFilter, {nullable:true})
    _max?: NestedEnumDocTypesFilter;
}
