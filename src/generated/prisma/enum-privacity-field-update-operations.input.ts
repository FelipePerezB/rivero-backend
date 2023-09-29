import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Privacity } from './privacity.enum';

@InputType()
export class EnumPrivacityFieldUpdateOperationsInput {

    @Field(() => Privacity, {nullable:true})
    set?: keyof typeof Privacity;
}
