import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutDocInput } from './topic-create-without-doc.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutDocInput } from './topic-create-or-connect-without-doc.input';
import { TopicUpsertWithoutDocInput } from './topic-upsert-without-doc.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateToOneWithWhereWithoutDocInput } from './topic-update-to-one-with-where-without-doc.input';

@InputType()
export class TopicUpdateOneRequiredWithoutDocNestedInput {

    @Field(() => TopicCreateWithoutDocInput, {nullable:true})
    @Type(() => TopicCreateWithoutDocInput)
    create?: TopicCreateWithoutDocInput;

    @Field(() => TopicCreateOrConnectWithoutDocInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutDocInput)
    connectOrCreate?: TopicCreateOrConnectWithoutDocInput;

    @Field(() => TopicUpsertWithoutDocInput, {nullable:true})
    @Type(() => TopicUpsertWithoutDocInput)
    upsert?: TopicUpsertWithoutDocInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;

    @Field(() => TopicUpdateToOneWithWhereWithoutDocInput, {nullable:true})
    @Type(() => TopicUpdateToOneWithWhereWithoutDocInput)
    update?: TopicUpdateToOneWithWhereWithoutDocInput;
}
