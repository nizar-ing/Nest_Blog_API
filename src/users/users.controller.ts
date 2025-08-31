import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';

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
  public createUsers(@Body() bodyRequest: any): string {
    console.log(bodyRequest);
    return 'You sent a POST request to \'/users\' endpoint.';
  }
}
