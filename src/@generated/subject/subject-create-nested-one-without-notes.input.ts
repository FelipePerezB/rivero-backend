import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutNotesInput } from './subject-create-without-notes.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutNotesInput } from './subject-create-or-connect-without-notes.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@InputType()
export class SubjectCreateNestedOneWithoutNotesInput {

    @Field(() => SubjectCreateWithoutNotesInput, {nullable:true})
    @Type(() => SubjectCreateWithoutNotesInput)
    create?: SubjectCreateWithoutNotesInput;

    @Field(() => SubjectCreateOrConnectWithoutNotesInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutNotesInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutNotesInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;
}
