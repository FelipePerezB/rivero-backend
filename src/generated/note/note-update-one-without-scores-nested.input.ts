import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutScoresInput } from './note-create-without-scores.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutScoresInput } from './note-create-or-connect-without-scores.input';
import { NoteUpsertWithoutScoresInput } from './note-upsert-without-scores.input';
import { NoteWhereInput } from './note-where.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { NoteUpdateToOneWithWhereWithoutScoresInput } from './note-update-to-one-with-where-without-scores.input';

@InputType()
export class NoteUpdateOneWithoutScoresNestedInput {

    @Field(() => NoteCreateWithoutScoresInput, {nullable:true})
    @Type(() => NoteCreateWithoutScoresInput)
    create?: NoteCreateWithoutScoresInput;

    @Field(() => NoteCreateOrConnectWithoutScoresInput, {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutScoresInput)
    connectOrCreate?: NoteCreateOrConnectWithoutScoresInput;

    @Field(() => NoteUpsertWithoutScoresInput, {nullable:true})
    @Type(() => NoteUpsertWithoutScoresInput)
    upsert?: NoteUpsertWithoutScoresInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    disconnect?: NoteWhereInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    delete?: NoteWhereInput;

    @Field(() => NoteWhereUniqueInput, {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: NoteWhereUniqueInput;

    @Field(() => NoteUpdateToOneWithWhereWithoutScoresInput, {nullable:true})
    @Type(() => NoteUpdateToOneWithWhereWithoutScoresInput)
    update?: NoteUpdateToOneWithWhereWithoutScoresInput;
}
