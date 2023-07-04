import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput, UpdateUserInput } from './user.input';
// import { ApiTags } from '@nestjs/swagger';
// import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
// import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() payload: CreateUserInput) {
    const newUser = await this.usersService.create(payload);
    return {
      message: 'accion de crear',
      newUser: newUser,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserInput,
  ) {
    const rta = this.usersService.update(id, payload);
    return {
      message: rta,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    const rta = this.usersService.remove(id);
    return {
      message: rta,
    };
  }
}
