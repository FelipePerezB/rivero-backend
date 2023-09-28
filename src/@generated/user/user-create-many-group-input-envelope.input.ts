import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyGroupInput } from './user-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyGroupInputEnvelope {

    @Field(() => [UserCreateManyGroupInput], {nullable:false})
    @Type(() => UserCreateManyGroupInput)
    data!: Array<UserCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
