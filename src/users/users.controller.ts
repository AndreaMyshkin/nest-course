import { Get, Controller, Body, Post, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/users')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
 // @UsePipes(new ValidationPipe())
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
