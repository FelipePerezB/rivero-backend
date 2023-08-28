import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ScoreUncheckedCreateNestedManyWithoutUserInput } from '../score/score-unchecked-create-nested-many-without-user.input';
import { DocUncheckedCreateNestedManyWithoutAuthorInput } from '../doc/doc-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutSchoolInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Score?: ScoreUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DocUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    Doc?: DocUncheckedCreateNestedManyWithoutAuthorInput;
}
