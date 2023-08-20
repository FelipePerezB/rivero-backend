import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Int } from '@nestjs/graphql';
import { Grade } from '../grade/grade.model';
import { School } from '../school/school.model';
import { Score } from '../score/score.model';
import { Doc } from '../doc/doc.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:false})
    nickname!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Int, {nullable:false})
    schoolId!: number;

    @Field(() => Grade, {nullable:false})
    Grade?: Grade;

    @Field(() => School, {nullable:false})
    School?: School;

    @Field(() => [Score], {nullable:true})
    Score?: Array<Score>;

    @Field(() => [Doc], {nullable:true})
    Doc?: Array<Doc>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
