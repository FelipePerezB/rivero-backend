import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateManySubjectInput } from './note-create-many-subject.input';
import { Type } from 'class-transformer';

@InputType()
export class NoteCreateManySubjectInputEnvelope {

    @Field(() => [NoteCreateManySubjectInput], {nullable:false})
    @Type(() => NoteCreateManySubjectInput)
    data!: Array<NoteCreateManySubjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
