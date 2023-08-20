import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocTypes } from '../prisma/doc-types.enum';

@InputType()
export class NestedEnumDocTypesFilter {

    @Field(() => DocTypes, {nullable:true})
    equals?: keyof typeof DocTypes;

    @Field(() => [DocTypes], {nullable:true})
    in?: Array<keyof typeof DocTypes>;

    @Field(() => [DocTypes], {nullable:true})
    notIn?: Array<keyof typeof DocTypes>;

    @Field(() => NestedEnumDocTypesFilter, {nullable:true})
    not?: NestedEnumDocTypesFilter;
}
