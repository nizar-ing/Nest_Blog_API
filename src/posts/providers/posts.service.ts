import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {
  }

  public findAll(userId: string){
    const user = this.usersService.findOneById(userId);
    return {
      user,
    posts: [
      {
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        title: 'Test Title 2',
        content: 'Test Content 2',
      }
    ]
    };
  }
}
