import { Injectable } from '@nestjs/common';

import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger.warn("soy una advertencia");
    return 'Hello World! ';
  }
}
