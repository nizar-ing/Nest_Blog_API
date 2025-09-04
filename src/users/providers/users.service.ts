import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from '../../auth/providers/auth.service';

@Injectable()
export class UsersService {

  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
  ) {}

  public findAll(getUserParamDto: GetUsersParamDto, limit: number, page: number) {

    return this.authService.isAuth() ? [{
      firstName: 'John',
      email: 'john@example.com',
    },
      {
        firstName: 'Alice',
        email: 'alice@example.com',
      },
    ] :
      "You must be authenticated first";
  }

  public findOneById(id: string) {
    return {
      id,
      firstName: 'John',
      email: 'john@example.com',
    };
  }
}
