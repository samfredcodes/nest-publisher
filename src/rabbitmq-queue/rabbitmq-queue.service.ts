import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';



@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('gv-analytics-module') private readonly client: ClientProxy,
  ) {}
  public send(pattern: string, data: any) {
    return this.client.send(pattern, data).toPromise();
  }
}