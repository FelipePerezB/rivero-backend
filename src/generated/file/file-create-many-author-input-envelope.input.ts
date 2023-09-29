import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyAuthorInput } from './file-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyAuthorInputEnvelope {

    @Field(() => [FileCreateManyAuthorInput], {nullable:false})
    @Type(() => FileCreateManyAuthorInput)
    data!: Array<FileCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
