import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutNotesInput } from './subject-create-without-notes.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutNotesInput } from './subject-create-or-connect-without-notes.input';
import { SubjectUpsertWithoutNotesInput } from './subject-upsert-without-notes.input';
import { SubjectWhereInput } from './subject-where.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateToOneWithWhereWithoutNotesInput } from './subject-update-to-one-with-where-without-notes.input';

@InputType()
export class SubjectUpdateOneWithoutNotesNestedInput {

    @Field(() => SubjectCreateWithoutNotesInput, {nullable:true})
    @Type(() => SubjectCreateWithoutNotesInput)
    create?: SubjectCreateWithoutNotesInput;

    @Field(() => SubjectCreateOrConnectWithoutNotesInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutNotesInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutNotesInput;

    @Field(() => SubjectUpsertWithoutNotesInput, {nullable:true})
    @Type(() => SubjectUpsertWithoutNotesInput)
    upsert?: SubjectUpsertWithoutNotesInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    disconnect?: SubjectWhereInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    delete?: SubjectWhereInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateToOneWithWhereWithoutNotesInput, {nullable:true})
    @Type(() => SubjectUpdateToOneWithWhereWithoutNotesInput)
    update?: SubjectUpdateToOneWithWhereWithoutNotesInput;
}
