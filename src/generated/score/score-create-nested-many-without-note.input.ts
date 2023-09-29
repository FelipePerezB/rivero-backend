import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutNoteInput } from './score-create-without-note.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutNoteInput } from './score-create-or-connect-without-note.input';
import { ScoreCreateManyNoteInputEnvelope } from './score-create-many-note-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';

@InputType()
export class ScoreCreateNestedManyWithoutNoteInput {

    @Field(() => [ScoreCreateWithoutNoteInput], {nullable:true})
    @Type(() => ScoreCreateWithoutNoteInput)
    create?: Array<ScoreCreateWithoutNoteInput>;

    @Field(() => [ScoreCreateOrConnectWithoutNoteInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutNoteInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutNoteInput>;

    @Field(() => ScoreCreateManyNoteInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyNoteInputEnvelope)
    createMany?: ScoreCreateManyNoteInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;
}
