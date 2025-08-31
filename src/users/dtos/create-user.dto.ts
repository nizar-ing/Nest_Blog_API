import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    {
      message: 'Password must contain at least one letter, one number, and one special character (@$!%*?&)',
    }
  )
  password: string;
}
