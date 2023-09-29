import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Privacity } from './privacity.enum';
import { NestedEnumPrivacityFilter } from './nested-enum-privacity-filter.input';

@InputType()
export class EnumPrivacityFilter {

    @Field(() => Privacity, {nullable:true})
    equals?: keyof typeof Privacity;

    @Field(() => [Privacity], {nullable:true})
    in?: Array<keyof typeof Privacity>;

    @Field(() => [Privacity], {nullable:true})
    notIn?: Array<keyof typeof Privacity>;

    @Field(() => NestedEnumPrivacityFilter, {nullable:true})
    not?: NestedEnumPrivacityFilter;
}
