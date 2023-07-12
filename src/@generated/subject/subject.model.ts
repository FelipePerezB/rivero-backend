import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SubjectsOnSchools } from '../subjects-on-schools/subjects-on-schools.model';
import { Topic } from '../topic/topic.model';
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

    @Field(() => [SubjectsOnSchools], {nullable:true})
    schools?: Array<SubjectsOnSchools>;

    @Field(() => [Topic], {nullable:true})
    topics?: Array<Topic>;

    @Field(() => SubjectCount, {nullable:false})
    _count?: SubjectCount;
}
