import { Controller, Get, Query } from '@nestjs/common';
import { AppSearchQuery } from './app-search.query';

@Controller()
export class AppController {
  @Get()
  getHello(@Query() query: AppSearchQuery): AppSearchQuery {
    return query;
  }
}
