import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutSubtopicInput } from './doc-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutSubtopicInput } from './doc-create-or-connect-without-subtopic.input';
import { DocCreateManySubtopicInputEnvelope } from './doc-create-many-subtopic-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@InputType()
export class DocUncheckedCreateNestedManyWithoutSubtopicInput {

    @Field(() => [DocCreateWithoutSubtopicInput], {nullable:true})
    @Type(() => DocCreateWithoutSubtopicInput)
    create?: Array<DocCreateWithoutSubtopicInput>;

    @Field(() => [DocCreateOrConnectWithoutSubtopicInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutSubtopicInput>;

    @Field(() => DocCreateManySubtopicInputEnvelope, {nullable:true})
    @Type(() => DocCreateManySubtopicInputEnvelope)
    createMany?: DocCreateManySubtopicInputEnvelope;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: Array<DocWhereUniqueInput>;
}
