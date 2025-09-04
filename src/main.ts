import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true, // this, transform incoming body requests to an appropriate DTO instance class after validation.
  }));

  // 1- Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('BLOG REST API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt'
    )
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();

  // 2- Instantiate a Document Object
  const document = SwaggerModule.createDocument(app, config);

  // 3- Setting up this current document
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
