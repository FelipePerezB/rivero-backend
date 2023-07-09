import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDocOrThrowArgs {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;
}
