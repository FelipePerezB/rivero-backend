import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Doc } from '../doc/doc.model';
import { SubjectsOnSchools } from '../subjects-on-schools/subjects-on-schools.model';
import { Topic } from '../topic/topic.model';
import { Score } from '../score/score.model';
import { SubjectCount } from './subject-count.output';

@ObjectType()
export class Subject {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => [Doc], {nullable:true})
    docs?: Array<Doc>;

    @Field(() => [SubjectsOnSchools], {nullable:true})
    schools?: Array<SubjectsOnSchools>;

    @Field(() => [Topic], {nullable:true})
    topics?: Array<Topic>;

    @Field(() => [Score], {nullable:true})
    Score?: Array<Score>;

    @Field(() => SubjectCount, {nullable:false})
    _count?: SubjectCount;
}
