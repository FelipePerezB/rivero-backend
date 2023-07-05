import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { PrismaService } from './prisma.service';

export async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.enableCors({
    origin: false,
    credentials: true,
    methods: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    allowedHeaders:"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
  })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
