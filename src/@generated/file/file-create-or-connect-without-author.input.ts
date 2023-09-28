import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutAuthorInput } from './file-create-without-author.input';

@InputType()
export class FileCreateOrConnectWithoutAuthorInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutAuthorInput, {nullable:false})
    @Type(() => FileCreateWithoutAuthorInput)
    create!: FileCreateWithoutAuthorInput;
}
