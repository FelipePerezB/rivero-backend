import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutSubjectInput } from './topic-create-without-subject.input';

@InputType()
export class TopicCreateOrConnectWithoutSubjectInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutSubjectInput, {nullable:false})
    @Type(() => TopicCreateWithoutSubjectInput)
    create!: TopicCreateWithoutSubjectInput;
}
