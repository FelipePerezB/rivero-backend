import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Privacity } from '../prisma/privacity.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Note } from '../note/note.model';
import { FileCount } from './file-count.output';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Privacity, {nullable:false})
    privacity!: keyof typeof Privacity;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => User, {nullable:false})
    Author?: User;

    @Field(() => [Note], {nullable:true})
    Note?: Array<Note>;

    @Field(() => FileCount, {nullable:false})
    _count?: FileCount;
}
