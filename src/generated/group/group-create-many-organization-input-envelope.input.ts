import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateManyOrganizationInput } from './group-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class GroupCreateManyOrganizationInputEnvelope {

    @Field(() => [GroupCreateManyOrganizationInput], {nullable:false})
    @Type(() => GroupCreateManyOrganizationInput)
    data!: Array<GroupCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
