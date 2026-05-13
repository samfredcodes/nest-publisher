import { Module } from '@nestjs/common';
import { ClientsModule , ClientProviderOptions, Transport} from '@nestjs/microservices';
import { RabbitMQService } from './rabbitmq-queue.service';
import { getConfig } from '../config/rabbitmq.config';
import { ConfigService } from '@nestjs/config';


const getConfigValue = getConfig()

@Module({
  imports: [
    ClientsModule.register([
      getConfigValue
    ]),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}