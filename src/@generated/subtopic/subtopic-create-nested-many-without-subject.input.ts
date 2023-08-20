import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutSubjectInput } from './subtopic-create-without-subject.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutSubjectInput } from './subtopic-create-or-connect-without-subject.input';
import { SubtopicCreateManySubjectInputEnvelope } from './subtopic-create-many-subject-input-envelope.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';

@InputType()
export class SubtopicCreateNestedManyWithoutSubjectInput {

    @Field(() => [SubtopicCreateWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicCreateWithoutSubjectInput)
    create?: Array<SubtopicCreateWithoutSubjectInput>;

    @Field(() => [SubtopicCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<SubtopicCreateOrConnectWithoutSubjectInput>;

    @Field(() => SubtopicCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => SubtopicCreateManySubjectInputEnvelope)
    createMany?: SubtopicCreateManySubjectInputEnvelope;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: Array<SubtopicWhereUniqueInput>;
}
