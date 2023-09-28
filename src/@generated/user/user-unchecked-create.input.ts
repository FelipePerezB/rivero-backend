import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ScoreUncheckedCreateNestedManyWithoutUserInput } from '../score/score-unchecked-create-nested-many-without-user.input';
import { FileUncheckedCreateNestedManyWithoutAuthorInput } from '../file/file-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Score?: ScoreUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FileUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    File?: FileUncheckedCreateNestedManyWithoutAuthorInput;
}
