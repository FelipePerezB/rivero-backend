import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { PrismaService } from './prisma.service';

export async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, { cors: false });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
