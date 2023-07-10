import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutAuthorInput } from './doc-create-without-author.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutAuthorInput } from './doc-create-or-connect-without-author.input';
import { DocCreateManyAuthorInputEnvelope } from './doc-create-many-author-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@InputType()
export class DocUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [DocCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DocCreateWithoutAuthorInput)
    create?: Array<DocCreateWithoutAuthorInput>;

    @Field(() => [DocCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutAuthorInput>;

    @Field(() => DocCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DocCreateManyAuthorInputEnvelope)
    createMany?: DocCreateManyAuthorInputEnvelope;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: Array<DocWhereUniqueInput>;
}
