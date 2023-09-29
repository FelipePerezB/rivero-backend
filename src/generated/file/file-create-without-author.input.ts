import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { NoteCreateNestedOneWithoutFileInput } from '../note/note-create-nested-one-without-file.input';

@InputType()
export class FileCreateWithoutAuthorInput {

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

    @Field(() => NoteCreateNestedOneWithoutFileInput, {nullable:true})
    Note?: NoteCreateNestedOneWithoutFileInput;
}
