import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsCreateWithoutDocInput } from './grades-on-docs-create-without-doc.input';
import { Type } from 'class-transformer';
import { GradesOnDocsCreateOrConnectWithoutDocInput } from './grades-on-docs-create-or-connect-without-doc.input';
import { GradesOnDocsUpsertWithWhereUniqueWithoutDocInput } from './grades-on-docs-upsert-with-where-unique-without-doc.input';
import { GradesOnDocsCreateManyDocInputEnvelope } from './grades-on-docs-create-many-doc-input-envelope.input';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';
import { GradesOnDocsUpdateWithWhereUniqueWithoutDocInput } from './grades-on-docs-update-with-where-unique-without-doc.input';
import { GradesOnDocsUpdateManyWithWhereWithoutDocInput } from './grades-on-docs-update-many-with-where-without-doc.input';
import { GradesOnDocsScalarWhereInput } from './grades-on-docs-scalar-where.input';

@InputType()
export class GradesOnDocsUncheckedUpdateManyWithoutDocNestedInput {

    @Field(() => [GradesOnDocsCreateWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsCreateWithoutDocInput)
    create?: Array<GradesOnDocsCreateWithoutDocInput>;

    @Field(() => [GradesOnDocsCreateOrConnectWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsCreateOrConnectWithoutDocInput)
    connectOrCreate?: Array<GradesOnDocsCreateOrConnectWithoutDocInput>;

    @Field(() => [GradesOnDocsUpsertWithWhereUniqueWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsUpsertWithWhereUniqueWithoutDocInput)
    upsert?: Array<GradesOnDocsUpsertWithWhereUniqueWithoutDocInput>;

    @Field(() => GradesOnDocsCreateManyDocInputEnvelope, {nullable:true})
    @Type(() => GradesOnDocsCreateManyDocInputEnvelope)
    createMany?: GradesOnDocsCreateManyDocInputEnvelope;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    set?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    disconnect?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    delete?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    connect?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsUpdateWithWhereUniqueWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsUpdateWithWhereUniqueWithoutDocInput)
    update?: Array<GradesOnDocsUpdateWithWhereUniqueWithoutDocInput>;

    @Field(() => [GradesOnDocsUpdateManyWithWhereWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsUpdateManyWithWhereWithoutDocInput)
    updateMany?: Array<GradesOnDocsUpdateManyWithWhereWithoutDocInput>;

    @Field(() => [GradesOnDocsScalarWhereInput], {nullable:true})
    @Type(() => GradesOnDocsScalarWhereInput)
    deleteMany?: Array<GradesOnDocsScalarWhereInput>;
}
