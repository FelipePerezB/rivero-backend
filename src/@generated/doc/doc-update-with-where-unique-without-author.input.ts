import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutAuthorInput } from './doc-update-without-author.input';

@InputType()
export class DocUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => DocUpdateWithoutAuthorInput)
    data!: DocUpdateWithoutAuthorInput;
}
