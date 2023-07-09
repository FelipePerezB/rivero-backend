import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutSubjectInput } from './doc-create-without-subject.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutSubjectInput } from './doc-create-or-connect-without-subject.input';
import { DocCreateManySubjectInputEnvelope } from './doc-create-many-subject-input-envelope.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@InputType()
export class DocUncheckedCreateNestedManyWithoutSubjectInput {

    @Field(() => [DocCreateWithoutSubjectInput], {nullable:true})
    @Type(() => DocCreateWithoutSubjectInput)
    create?: Array<DocCreateWithoutSubjectInput>;

    @Field(() => [DocCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => DocCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<DocCreateOrConnectWithoutSubjectInput>;

    @Field(() => DocCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => DocCreateManySubjectInputEnvelope)
    createMany?: DocCreateManySubjectInputEnvelope;

    @Field(() => [DocWhereUniqueInput], {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: Array<DocWhereUniqueInput>;
}
