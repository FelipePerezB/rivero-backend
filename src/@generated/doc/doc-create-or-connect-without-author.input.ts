import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutAuthorInput } from './doc-create-without-author.input';

@InputType()
export class DocCreateOrConnectWithoutAuthorInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateWithoutAuthorInput, {nullable:false})
    @Type(() => DocCreateWithoutAuthorInput)
    create!: DocCreateWithoutAuthorInput;
}
