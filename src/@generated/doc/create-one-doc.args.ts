import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocCreateInput } from './doc-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDocArgs {

    @Field(() => DocCreateInput, {nullable:false})
    @Type(() => DocCreateInput)
    data!: DocCreateInput;
}
