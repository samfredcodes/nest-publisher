import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from './rabbitmq-queue/rabbitmq-queue.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    RabbitMQModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
