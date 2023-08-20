import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocTypes } from './doc-types.enum';
import { NestedEnumDocTypesFilter } from '../doc/nested-enum-doc-types-filter.input';

@InputType()
export class EnumDocTypesFilter {

    @Field(() => DocTypes, {nullable:true})
    equals?: keyof typeof DocTypes;

    @Field(() => [DocTypes], {nullable:true})
    in?: Array<keyof typeof DocTypes>;

    @Field(() => [DocTypes], {nullable:true})
    notIn?: Array<keyof typeof DocTypes>;

    @Field(() => NestedEnumDocTypesFilter, {nullable:true})
    not?: NestedEnumDocTypesFilter;
}
