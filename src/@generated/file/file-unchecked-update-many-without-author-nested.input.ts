import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAuthorInput } from './file-create-without-author.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAuthorInput } from './file-create-or-connect-without-author.input';
import { FileUpsertWithWhereUniqueWithoutAuthorInput } from './file-upsert-with-where-unique-without-author.input';
import { FileCreateManyAuthorInputEnvelope } from './file-create-many-author-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutAuthorInput } from './file-update-with-where-unique-without-author.input';
import { FileUpdateManyWithWhereWithoutAuthorInput } from './file-update-many-with-where-without-author.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [FileCreateWithoutAuthorInput], {nullable:true})
    @Type(() => FileCreateWithoutAuthorInput)
    create?: Array<FileCreateWithoutAuthorInput>;

    @Field(() => [FileCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutAuthorInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => FileCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyAuthorInputEnvelope)
    createMany?: FileCreateManyAuthorInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
