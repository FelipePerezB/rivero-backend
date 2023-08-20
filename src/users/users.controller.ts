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
import { User, Prisma } from '@prisma/client';
import { UserUpdateInput } from 'src/@generated/user/user-update.input';
import { UserCreateInput } from 'src/@generated/user/user-create.input';

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
  @HttpCode(HttpStatus.CREATED)
  @Post('sendInvitation')
  async sendInvitation(@Body() data: Prisma.UserCreateInput) {
    // const res = await axios
    const res =  this.usersService.sendInvitation();
    console.log(res)
    return res
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne({ id });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(
    @Param('where', ParseIntPipe) id: number,
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
