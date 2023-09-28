import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { NoteUncheckedCreateNestedManyWithoutFileInput } from '../note/note-unchecked-create-nested-many-without-file.input';

@InputType()
export class FileUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Privacity, {nullable:false})
    privacity!: keyof typeof Privacity;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => NoteUncheckedCreateNestedManyWithoutFileInput, {nullable:true})
    Note?: NoteUncheckedCreateNestedManyWithoutFileInput;
}