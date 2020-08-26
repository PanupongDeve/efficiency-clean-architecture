import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { message } from '../datasource/mock/Greeting';
import { greetingAdater } from '../domain/adapters/greetingAdater'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return message;
  }

  @Get('clean')
  getHelloWithClean(): string {
    return greetingAdater.getMessage();
  }
}
