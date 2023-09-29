import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutSubjectInput } from './topic-create-without-subject.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutSubjectInput } from './topic-create-or-connect-without-subject.input';
import { TopicUpsertWithWhereUniqueWithoutSubjectInput } from './topic-upsert-with-where-unique-without-subject.input';
import { TopicCreateManySubjectInputEnvelope } from './topic-create-many-subject-input-envelope.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateWithWhereUniqueWithoutSubjectInput } from './topic-update-with-where-unique-without-subject.input';
import { TopicUpdateManyWithWhereWithoutSubjectInput } from './topic-update-many-with-where-without-subject.input';
import { TopicScalarWhereInput } from './topic-scalar-where.input';

@InputType()
export class TopicUncheckedUpdateManyWithoutSubjectNestedInput {

    @Field(() => [TopicCreateWithoutSubjectInput], {nullable:true})
    @Type(() => TopicCreateWithoutSubjectInput)
    create?: Array<TopicCreateWithoutSubjectInput>;

    @Field(() => [TopicCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<TopicCreateOrConnectWithoutSubjectInput>;

    @Field(() => [TopicUpsertWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => TopicUpsertWithWhereUniqueWithoutSubjectInput)
    upsert?: Array<TopicUpsertWithWhereUniqueWithoutSubjectInput>;

    @Field(() => TopicCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => TopicCreateManySubjectInputEnvelope)
    createMany?: TopicCreateManySubjectInputEnvelope;

    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    set?: Array<TopicWhereUniqueInput>;

    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    disconnect?: Array<TopicWhereUniqueInput>;

    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    delete?: Array<TopicWhereUniqueInput>;

    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Array<TopicWhereUniqueInput>;

    @Field(() => [TopicUpdateWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => TopicUpdateWithWhereUniqueWithoutSubjectInput)
    update?: Array<TopicUpdateWithWhereUniqueWithoutSubjectInput>;

    @Field(() => [TopicUpdateManyWithWhereWithoutSubjectInput], {nullable:true})
    @Type(() => TopicUpdateManyWithWhereWithoutSubjectInput)
    updateMany?: Array<TopicUpdateManyWithWhereWithoutSubjectInput>;

    @Field(() => [TopicScalarWhereInput], {nullable:true})
    @Type(() => TopicScalarWhereInput)
    deleteMany?: Array<TopicScalarWhereInput>;
}
