import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutSchoolInput } from '../user/user-create-nested-many-without-school.input';

@InputType()
export class SchoolCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutSchoolInput, {nullable:true})
    Users?: UserCreateNestedManyWithoutSchoolInput;
}
