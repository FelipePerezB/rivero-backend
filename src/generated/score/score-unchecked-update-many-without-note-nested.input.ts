import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutNoteInput } from './score-create-without-note.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutNoteInput } from './score-create-or-connect-without-note.input';
import { ScoreUpsertWithWhereUniqueWithoutNoteInput } from './score-upsert-with-where-unique-without-note.input';
import { ScoreCreateManyNoteInputEnvelope } from './score-create-many-note-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { ScoreUpdateWithWhereUniqueWithoutNoteInput } from './score-update-with-where-unique-without-note.input';
import { ScoreUpdateManyWithWhereWithoutNoteInput } from './score-update-many-with-where-without-note.input';
import { ScoreScalarWhereInput } from './score-scalar-where.input';

@InputType()
export class ScoreUncheckedUpdateManyWithoutNoteNestedInput {

    @Field(() => [ScoreCreateWithoutNoteInput], {nullable:true})
    @Type(() => ScoreCreateWithoutNoteInput)
    create?: Array<ScoreCreateWithoutNoteInput>;

    @Field(() => [ScoreCreateOrConnectWithoutNoteInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutNoteInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutNoteInput>;

    @Field(() => [ScoreUpsertWithWhereUniqueWithoutNoteInput], {nullable:true})
    @Type(() => ScoreUpsertWithWhereUniqueWithoutNoteInput)
    upsert?: Array<ScoreUpsertWithWhereUniqueWithoutNoteInput>;

    @Field(() => ScoreCreateManyNoteInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyNoteInputEnvelope)
    createMany?: ScoreCreateManyNoteInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    set?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    disconnect?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    delete?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreUpdateWithWhereUniqueWithoutNoteInput], {nullable:true})
    @Type(() => ScoreUpdateWithWhereUniqueWithoutNoteInput)
    update?: Array<ScoreUpdateWithWhereUniqueWithoutNoteInput>;

    @Field(() => [ScoreUpdateManyWithWhereWithoutNoteInput], {nullable:true})
    @Type(() => ScoreUpdateManyWithWhereWithoutNoteInput)
    updateMany?: Array<ScoreUpdateManyWithWhereWithoutNoteInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    @Type(() => ScoreScalarWhereInput)
    deleteMany?: Array<ScoreScalarWhereInput>;
}
