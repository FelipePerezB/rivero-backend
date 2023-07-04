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
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll({});
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async signupUser(@Body() subjectData: Prisma.UserCreateInput): Promise<User> {
    return this.usersService.create(subjectData);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.usersService.update({ where: { id }, data });
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove({ id });
  }
}

// @Post()
// async create(@Body() payload: CreateUserInput) {
//   const newUser = await this.usersService.create(payload);
//   return {
//     message: 'accion de crear',
//     newUser: newUser,
//   };
// }
