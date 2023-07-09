import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicUpdateWithoutSubjectInput } from './topic-update-without-subject.input';

@InputType()
export class TopicUpdateWithWhereUniqueWithoutSubjectInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicUpdateWithoutSubjectInput, {nullable:false})
    @Type(() => TopicUpdateWithoutSubjectInput)
    data!: TopicUpdateWithoutSubjectInput;
}
