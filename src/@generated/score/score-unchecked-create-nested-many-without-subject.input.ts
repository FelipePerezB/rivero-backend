import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutSubjectInput } from './score-create-without-subject.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutSubjectInput } from './score-create-or-connect-without-subject.input';
import { ScoreCreateManySubjectInputEnvelope } from './score-create-many-subject-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';

@InputType()
export class ScoreUncheckedCreateNestedManyWithoutSubjectInput {

    @Field(() => [ScoreCreateWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreCreateWithoutSubjectInput)
    create?: Array<ScoreCreateWithoutSubjectInput>;

    @Field(() => [ScoreCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutSubjectInput>;

    @Field(() => ScoreCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManySubjectInputEnvelope)
    createMany?: ScoreCreateManySubjectInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;
}
