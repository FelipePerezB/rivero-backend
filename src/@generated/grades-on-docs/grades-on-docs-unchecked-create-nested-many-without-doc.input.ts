import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsCreateWithoutDocInput } from './grades-on-docs-create-without-doc.input';
import { Type } from 'class-transformer';
import { GradesOnDocsCreateOrConnectWithoutDocInput } from './grades-on-docs-create-or-connect-without-doc.input';
import { GradesOnDocsCreateManyDocInputEnvelope } from './grades-on-docs-create-many-doc-input-envelope.input';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';

@InputType()
export class GradesOnDocsUncheckedCreateNestedManyWithoutDocInput {

    @Field(() => [GradesOnDocsCreateWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsCreateWithoutDocInput)
    create?: Array<GradesOnDocsCreateWithoutDocInput>;

    @Field(() => [GradesOnDocsCreateOrConnectWithoutDocInput], {nullable:true})
    @Type(() => GradesOnDocsCreateOrConnectWithoutDocInput)
    connectOrCreate?: Array<GradesOnDocsCreateOrConnectWithoutDocInput>;

    @Field(() => GradesOnDocsCreateManyDocInputEnvelope, {nullable:true})
    @Type(() => GradesOnDocsCreateManyDocInputEnvelope)
    createMany?: GradesOnDocsCreateManyDocInputEnvelope;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    connect?: Array<GradesOnDocsWhereUniqueInput>;
}
