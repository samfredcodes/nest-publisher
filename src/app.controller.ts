import { Controller, Get,Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbitmq-queue/rabbitmq-queue.service';
import { ConfigService } from '@nestjs/config';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private config:ConfigService,
    private readonly rabbitMQService: RabbitMQService
    ) {}

  @Get("/sendToQueue")
  getMessage(@Query() body: any): string {   
    this.rabbitMQService.send(this.config.get("RABBIT_MQ_CHANNEL"), {
      message: JSON.stringify(body),
    });
    console.log(JSON.stringify(body));
    return this.appService.getHello();
  }

  @Post("/sendToQueue")
  getPostMessage(@Body() body: any): string {
    this.rabbitMQService.send(this.config.get("RABBIT_MQ_CHANNEL"), {
      message: JSON.stringify(body),
    });
    return this.appService.getHello();
  }
}
