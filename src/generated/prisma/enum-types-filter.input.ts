import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Types } from './types.enum';
import { NestedEnumTypesFilter } from './nested-enum-types-filter.input';

@InputType()
export class EnumTypesFilter {

    @Field(() => Types, {nullable:true})
    equals?: keyof typeof Types;

    @Field(() => [Types], {nullable:true})
    in?: Array<keyof typeof Types>;

    @Field(() => [Types], {nullable:true})
    notIn?: Array<keyof typeof Types>;

    @Field(() => NestedEnumTypesFilter, {nullable:true})
    not?: NestedEnumTypesFilter;
}
