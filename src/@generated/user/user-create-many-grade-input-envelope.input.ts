import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyGradeInput } from './user-create-many-grade.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyGradeInputEnvelope {

    @Field(() => [UserCreateManyGradeInput], {nullable:false})
    @Type(() => UserCreateManyGradeInput)
    data!: Array<UserCreateManyGradeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
