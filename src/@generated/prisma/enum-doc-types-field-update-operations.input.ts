import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocTypes } from './doc-types.enum';

@InputType()
export class EnumDocTypesFieldUpdateOperationsInput {

    @Field(() => DocTypes, {nullable:true})
    set?: keyof typeof DocTypes;
}
