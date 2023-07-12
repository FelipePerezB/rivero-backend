import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ScoresService } from './scores.service';
import { Prisma, Score } from '@prisma/client';
import { ScoreCreateInput } from 'src/@generated/score/score-create.input';
import { ScoreUpdateInput } from 'src/@generated/score/score-update.input';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): any {
    return this.scoresService.findScores();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(
    @Body() subjectData: Prisma.ScoreCreateInput,
  ): Promise<Score> {
    return this.scoresService.create(subjectData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Score> {
    return this.scoresService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.ScoreUpdateInput,
  ): Promise<Score> {
    return this.scoresService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scoresService.remove({ id });
  }
}
