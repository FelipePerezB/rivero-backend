import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicUpdateWithoutNotesInput } from './topic-update-without-notes.input';

@InputType()
export class TopicUpdateToOneWithWhereWithoutNotesInput {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => TopicUpdateWithoutNotesInput, {nullable:false})
    @Type(() => TopicUpdateWithoutNotesInput)
    data!: TopicUpdateWithoutNotesInput;
}
