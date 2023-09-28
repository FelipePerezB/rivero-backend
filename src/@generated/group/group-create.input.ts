import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGroupInput } from '../user/user-create-nested-many-without-group.input';
import { OrganizationCreateNestedOneWithoutGroupsInput } from '../organization/organization-create-nested-one-without-groups.input';

@InputType()
export class GroupCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updateAt?: Date | string;

  @Field(() => UserCreateNestedManyWithoutGroupInput, { nullable: true })
  Users?: UserCreateNestedManyWithoutGroupInput;

  @Field(() => OrganizationCreateNestedOneWithoutGroupsInput, {
    nullable: false,
  })
  Organization!: OrganizationCreateNestedOneWithoutGroupsInput;
}
