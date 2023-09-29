import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAuthorInput } from './file-create-without-author.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAuthorInput } from './file-create-or-connect-without-author.input';
import { FileCreateManyAuthorInputEnvelope } from './file-create-many-author-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutAuthorInput {

    @Field(() => [FileCreateWithoutAuthorInput], {nullable:true})
    @Type(() => FileCreateWithoutAuthorInput)
    create?: Array<FileCreateWithoutAuthorInput>;

    @Field(() => [FileCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutAuthorInput>;

    @Field(() => FileCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyAuthorInputEnvelope)
    createMany?: FileCreateManyAuthorInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}
