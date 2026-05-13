import { ClientsModule, Transport,ClientProviderOptions } from '@nestjs/microservices';

export function getConfig():ClientProviderOptions {
    return {
        name: 'gv-analytics-module',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://admin:nanoPasswordnano123456@b-5401f99d-2a35-418d-bed5-cd982e711efd.mq.us-east-2.amazonaws.com:5671',
          ],
          queue: 'call-analytics-queue',
        },
      }
}
