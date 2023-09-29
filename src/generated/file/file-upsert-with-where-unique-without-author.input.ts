import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutAuthorInput } from './file-update-without-author.input';
import { FileCreateWithoutAuthorInput } from './file-create-without-author.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => FileUpdateWithoutAuthorInput)
    update!: FileUpdateWithoutAuthorInput;

    @Field(() => FileCreateWithoutAuthorInput, {nullable:false})
    @Type(() => FileCreateWithoutAuthorInput)
    create!: FileCreateWithoutAuthorInput;
}
