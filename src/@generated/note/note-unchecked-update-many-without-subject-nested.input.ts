import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutSubjectInput } from './note-create-without-subject.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutSubjectInput } from './note-create-or-connect-without-subject.input';
import { NoteUpsertWithWhereUniqueWithoutSubjectInput } from './note-upsert-with-where-unique-without-subject.input';
import { NoteCreateManySubjectInputEnvelope } from './note-create-many-subject-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { NoteUpdateWithWhereUniqueWithoutSubjectInput } from './note-update-with-where-unique-without-subject.input';
import { NoteUpdateManyWithWhereWithoutSubjectInput } from './note-update-many-with-where-without-subject.input';
import { NoteScalarWhereInput } from './note-scalar-where.input';

@InputType()
export class NoteUncheckedUpdateManyWithoutSubjectNestedInput {

    @Field(() => [NoteCreateWithoutSubjectInput], {nullable:true})
    @Type(() => NoteCreateWithoutSubjectInput)
    create?: Array<NoteCreateWithoutSubjectInput>;

    @Field(() => [NoteCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutSubjectInput>;

    @Field(() => [NoteUpsertWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => NoteUpsertWithWhereUniqueWithoutSubjectInput)
    upsert?: Array<NoteUpsertWithWhereUniqueWithoutSubjectInput>;

    @Field(() => NoteCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManySubjectInputEnvelope)
    createMany?: NoteCreateManySubjectInputEnvelope;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    set?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    disconnect?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    delete?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteUpdateWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => NoteUpdateWithWhereUniqueWithoutSubjectInput)
    update?: Array<NoteUpdateWithWhereUniqueWithoutSubjectInput>;

    @Field(() => [NoteUpdateManyWithWhereWithoutSubjectInput], {nullable:true})
    @Type(() => NoteUpdateManyWithWhereWithoutSubjectInput)
    updateMany?: Array<NoteUpdateManyWithWhereWithoutSubjectInput>;

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    @Type(() => NoteScalarWhereInput)
    deleteMany?: Array<NoteScalarWhereInput>;
}
