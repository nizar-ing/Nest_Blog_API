import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): string {
    console.log(limit);
    console.log(page);
    return 'You sent a GET request to \'/users\' endpoint.';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto): string {
    console.log(createUserDto);
    return 'You sent a POST request to \'/users\' endpoint.';
  }
}
