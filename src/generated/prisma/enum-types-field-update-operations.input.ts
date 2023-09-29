import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Types } from './types.enum';

@InputType()
export class EnumTypesFieldUpdateOperationsInput {

    @Field(() => Types, {nullable:true})
    set?: keyof typeof Types;
}
