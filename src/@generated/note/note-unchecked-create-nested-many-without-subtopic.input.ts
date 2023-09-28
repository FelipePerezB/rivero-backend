import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutSubtopicInput } from './note-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutSubtopicInput } from './note-create-or-connect-without-subtopic.input';
import { NoteCreateManySubtopicInputEnvelope } from './note-create-many-subtopic-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';

@InputType()
export class NoteUncheckedCreateNestedManyWithoutSubtopicInput {

    @Field(() => [NoteCreateWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteCreateWithoutSubtopicInput)
    create?: Array<NoteCreateWithoutSubtopicInput>;

    @Field(() => [NoteCreateOrConnectWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutSubtopicInput>;

    @Field(() => NoteCreateManySubtopicInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManySubtopicInputEnvelope)
    createMany?: NoteCreateManySubtopicInputEnvelope;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: Array<NoteWhereUniqueInput>;
}
