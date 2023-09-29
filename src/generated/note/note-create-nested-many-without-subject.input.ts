import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutSubjectInput } from './note-create-without-subject.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutSubjectInput } from './note-create-or-connect-without-subject.input';
import { NoteCreateManySubjectInputEnvelope } from './note-create-many-subject-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';

@InputType()
export class NoteCreateNestedManyWithoutSubjectInput {

    @Field(() => [NoteCreateWithoutSubjectInput], {nullable:true})
    @Type(() => NoteCreateWithoutSubjectInput)
    create?: Array<NoteCreateWithoutSubjectInput>;

    @Field(() => [NoteCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutSubjectInput>;

    @Field(() => NoteCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManySubjectInputEnvelope)
    createMany?: NoteCreateManySubjectInputEnvelope;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: Array<NoteWhereUniqueInput>;
}
