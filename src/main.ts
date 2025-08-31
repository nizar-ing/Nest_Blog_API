import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, // this, transform incoming body requests to an appropriate DTO instance class after validation.
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
