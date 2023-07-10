import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TopicsService } from './topics.service';
import { Topic } from '../@generated/topic/topic.model';
import { TopicCreateInput } from '../@generated/topic/topic-create.input';
import { TopicUpdateInput } from '../@generated/topic/topic-update.input';
import { Prisma } from '@prisma/client';

@Resolver(() => Topic)
export class TopicsResolver {
  constructor(private readonly topicService: TopicsService) {}

  @Mutation(() => Topic)
  createTopic(@Args('createTopicInput') createTopicInput: TopicCreateInput) {
    return this.topicService.create(
      createTopicInput as Prisma.TopicCreateInput,
    );
  }

  @Query(() => [Topic], { name: 'topic' })
  findAll() {
    return this.topicService.findAll({});
  }

  @Query(() => Topic, { name: 'topic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.topicService.findOne({ id });
  }

  @Mutation(() => Topic)
  updateTopic(
    @Args('id') id: number,
    @Args('updateTopicInput') updateTopicInput: TopicUpdateInput,
  ) {
    return this.topicService.update({
      where: { id },
      data: updateTopicInput as Prisma.TopicUpdateInput,
    });
  }

  @Mutation(() => Topic)
  removeTopic(@Args('id', { type: () => Int }) id: number) {
    return this.topicService.remove({ id });
  }
}
