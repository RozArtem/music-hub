import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function 
start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe())


  await app.listen(PORT, () => {

    console.log(`server has been running on port ${PORT}`)
  });
}

start();