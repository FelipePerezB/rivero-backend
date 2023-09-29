import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Types } from './types.enum';

@InputType()
export class NestedEnumTypesFilter {

    @Field(() => Types, {nullable:true})
    equals?: keyof typeof Types;

    @Field(() => [Types], {nullable:true})
    in?: Array<keyof typeof Types>;

    @Field(() => [Types], {nullable:true})
    notIn?: Array<keyof typeof Types>;

    @Field(() => NestedEnumTypesFilter, {nullable:true})
    not?: NestedEnumTypesFilter;
}
