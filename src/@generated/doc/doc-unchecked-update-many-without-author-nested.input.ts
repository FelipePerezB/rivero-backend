import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutAuthorInput } from './doc-create-without-author.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutAuthorInput } from './doc-create-or-connect-without-author.input';
import { DocUpsertWithWhereUniqueWithoutAuthorInput } from './doc-upsert-with-where-unique-without-author.input';
import { DocCreateManyAuthorInputEnvelope } from './doc-create-many-author-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { DocUpdateWithWhereUniqueWithoutAuthorInput } from './doc-update-with-where-unique-without-author.input';
import { DocUpdateManyWithWhereWithoutAuthorInput } from './doc-update-many-with-where-without-author.input';
import { DocScalarWhereInput } from './doc-scalar-where.input';

@InputType()
export class DocUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [DocCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DocCreateWithoutAuthorInput)
    create?: Array<DocCreateWithoutAuthorInput>;

    @Field(() => [DocCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutAuthorInput>;

    @Field(() => [DocUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DocUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<DocUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => DocCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DocCreateManyAuthorInputEnvelope)
    createMany?: DocCreateManyAuthorInputEnvelope;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    set?: Array<DocWhereUniqueInput>;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    disconnect?: Array<DocWhereUniqueInput>;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    delete?: Array<DocWhereUniqueInput>;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: Array<DocWhereUniqueInput>;

    @Field(() => [DocUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DocUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<DocUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [DocUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => DocUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<DocUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [DocScalarWhereInput], {nullable:true})
    @Type(() => DocScalarWhereInput)
    deleteMany?: Array<DocScalarWhereInput>;
}
