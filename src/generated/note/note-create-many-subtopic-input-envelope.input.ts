import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateManySubtopicInput } from './note-create-many-subtopic.input';
import { Type } from 'class-transformer';

@InputType()
export class NoteCreateManySubtopicInputEnvelope {

    @Field(() => [NoteCreateManySubtopicInput], {nullable:false})
    @Type(() => NoteCreateManySubtopicInput)
    data!: Array<NoteCreateManySubtopicInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
