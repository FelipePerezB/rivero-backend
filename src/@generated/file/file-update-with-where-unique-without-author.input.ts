import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutAuthorInput } from './file-update-without-author.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => FileUpdateWithoutAuthorInput)
    data!: FileUpdateWithoutAuthorInput;
}
