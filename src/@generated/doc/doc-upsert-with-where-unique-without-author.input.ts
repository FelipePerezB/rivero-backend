import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutAuthorInput } from './doc-update-without-author.input';
import { DocCreateWithoutAuthorInput } from './doc-create-without-author.input';

@InputType()
export class DocUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => DocUpdateWithoutAuthorInput)
    update!: DocUpdateWithoutAuthorInput;

    @Field(() => DocCreateWithoutAuthorInput, {nullable:false})
    @Type(() => DocCreateWithoutAuthorInput)
    create!: DocCreateWithoutAuthorInput;
}
