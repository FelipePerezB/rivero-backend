import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateManyTopicInput } from './note-create-many-topic.input';
import { Type } from 'class-transformer';

@InputType()
export class NoteCreateManyTopicInputEnvelope {

    @Field(() => [NoteCreateManyTopicInput], {nullable:false})
    @Type(() => NoteCreateManyTopicInput)
    data!: Array<NoteCreateManyTopicInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
