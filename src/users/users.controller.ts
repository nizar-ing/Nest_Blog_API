import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get('/:id')
  public getUsers(@Param() params: any, @Query() query: any): string {
    console.log(params, query);
    return "You sent a GET request to '/users' endpoint.";
  }

  @Post()
  public createUsers(@Body() bodyRequest: any): string{
    console.log(bodyRequest);
    return "You sent a POST request to '/users' endpoint.";
  }
}
