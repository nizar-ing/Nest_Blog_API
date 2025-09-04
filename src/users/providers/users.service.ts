import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {

  public findAll(getUserParamDto: GetUsersParamDto, limit: number, page: number) {
    return [{
      firstName: 'John',
      email: 'john@example.com',
    },
      {
        firstName: 'Alice',
        email: 'alice@example.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id,
      firstName: 'John',
      email: 'john@example.com',
    };
  }
}
