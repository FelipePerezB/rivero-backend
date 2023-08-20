import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ScoresService } from './scores.service';
import { Score } from '../@generated/score/score.model';
import { ScoreCreateInput } from '../@generated/score/score-create.input';
import { ScoreUpdateInput } from '../@generated/score/score-update.input';
import { Prisma } from '@prisma/client';
import { ScoreWhereInput } from 'src/@generated/score/score-where.input';

@Resolver(() => Score)
export class ScoresResolver {
  constructor(private readonly scoreService: ScoresService) {}

  @Mutation(() => Score)
  createScore(@Args('createScoreInput') createScoreInput: ScoreCreateInput) {
    return this.scoreService.create(
      createScoreInput as Prisma.ScoreCreateInput,
    );
  }

  @Query(() => [Score], { name: 'scores' })
  findAll(@Args('where') where: ScoreWhereInput) {
    return this.scoreService.findAll({ where });
  }

  @Query(() => Score, { name: 'score' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.scoreService.findOne({ id });
  }

  @Mutation(() => Score)
  updateScore(
    @Args('id') id: number,
    @Args('updateScoreInput') updateScoreInput: ScoreUpdateInput,
  ) {
    return this.scoreService.update({
      where: { id },
      data: updateScoreInput as unknown as Prisma.ScoreUpdateInput,
    });
  }

  @Mutation(() => Score)
  removeScore(@Args('id', { type: () => Int }) id: number) {
    return this.scoreService.remove({ id });
  }
}
