import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateWithoutSubjectInput } from './subtopic-create-without-subject.input';
import { Type } from 'class-transformer';
import { SubtopicCreateOrConnectWithoutSubjectInput } from './subtopic-create-or-connect-without-subject.input';
import { SubtopicUpsertWithWhereUniqueWithoutSubjectInput } from './subtopic-upsert-with-where-unique-without-subject.input';
import { SubtopicCreateManySubjectInputEnvelope } from './subtopic-create-many-subject-input-envelope.input';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { SubtopicUpdateWithWhereUniqueWithoutSubjectInput } from './subtopic-update-with-where-unique-without-subject.input';
import { SubtopicUpdateManyWithWhereWithoutSubjectInput } from './subtopic-update-many-with-where-without-subject.input';
import { SubtopicScalarWhereInput } from './subtopic-scalar-where.input';

@InputType()
export class SubtopicUpdateManyWithoutSubjectNestedInput {

    @Field(() => [SubtopicCreateWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicCreateWithoutSubjectInput)
    create?: Array<SubtopicCreateWithoutSubjectInput>;

    @Field(() => [SubtopicCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<SubtopicCreateOrConnectWithoutSubjectInput>;

    @Field(() => [SubtopicUpsertWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicUpsertWithWhereUniqueWithoutSubjectInput)
    upsert?: Array<SubtopicUpsertWithWhereUniqueWithoutSubjectInput>;

    @Field(() => SubtopicCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => SubtopicCreateManySubjectInputEnvelope)
    createMany?: SubtopicCreateManySubjectInputEnvelope;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    set?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    disconnect?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    delete?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicWhereUniqueInput], {nullable:true})
    @Type(() => SubtopicWhereUniqueInput)
    connect?: Array<SubtopicWhereUniqueInput>;

    @Field(() => [SubtopicUpdateWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicUpdateWithWhereUniqueWithoutSubjectInput)
    update?: Array<SubtopicUpdateWithWhereUniqueWithoutSubjectInput>;

    @Field(() => [SubtopicUpdateManyWithWhereWithoutSubjectInput], {nullable:true})
    @Type(() => SubtopicUpdateManyWithWhereWithoutSubjectInput)
    updateMany?: Array<SubtopicUpdateManyWithWhereWithoutSubjectInput>;

    @Field(() => [SubtopicScalarWhereInput], {nullable:true})
    @Type(() => SubtopicScalarWhereInput)
    deleteMany?: Array<SubtopicScalarWhereInput>;
}
