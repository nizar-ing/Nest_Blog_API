import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService
  ) {}

  public login(email: string, password: string, id: string) {
    const user = this.userService.findOneById(id);
    return "SAMPLE_TOKEN";
  }

  public isAuth(){
    return true;
  }
}
