import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutSubjectInput } from './topic-create-without-subject.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutSubjectInput } from './topic-create-or-connect-without-subject.input';
import { TopicCreateManySubjectInputEnvelope } from './topic-create-many-subject-input-envelope.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@InputType()
export class TopicCreateNestedManyWithoutSubjectInput {

    @Field(() => [TopicCreateWithoutSubjectInput], {nullable:true})
    @Type(() => TopicCreateWithoutSubjectInput)
    create?: Array<TopicCreateWithoutSubjectInput>;

    @Field(() => [TopicCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<TopicCreateOrConnectWithoutSubjectInput>;

    @Field(() => TopicCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => TopicCreateManySubjectInputEnvelope)
    createMany?: TopicCreateManySubjectInputEnvelope;

    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Array<TopicWhereUniqueInput>;
}
