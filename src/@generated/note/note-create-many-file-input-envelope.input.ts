import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateManyFileInput } from './note-create-many-file.input';
import { Type } from 'class-transformer';

@InputType()
export class NoteCreateManyFileInputEnvelope {

    @Field(() => [NoteCreateManyFileInput], {nullable:false})
    @Type(() => NoteCreateManyFileInput)
    data!: Array<NoteCreateManyFileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
