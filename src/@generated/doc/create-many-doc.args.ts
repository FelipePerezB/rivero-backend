import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocCreateManyInput } from './doc-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDocArgs {

    @Field(() => [DocCreateManyInput], {nullable:false})
    @Type(() => DocCreateManyInput)
    data!: Array<DocCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
