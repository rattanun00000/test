import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const allowedOrigins = configService.get<string>('ALLOWED_ORIGINS')?.split(',') ?? [];

  app.enableCors({
    origin: allowedOrigins, // กำหนด domain ที่อนุญาตฟหก
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // กำหนด HTTP methods ที่อนุญาต
    credentials: true, // อนุญาตให้ส่ง credentials (cookies, headers)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
