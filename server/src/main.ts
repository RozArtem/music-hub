import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'



const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/musichubsocial.ml/fullchain.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/musichubsocial.ml/privkey.pem'),
};

async function 
start() {



  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())


  await app.listen(PORT, () => {

    console.log(`server has been running on port ${PORT}`)
  });
}

start();