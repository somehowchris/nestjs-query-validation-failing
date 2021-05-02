import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppSearchQuery } from './app-search.query';

@Controller()
export class AppController {
  @Get()
  querySearch(@Query() query: AppSearchQuery): AppSearchQuery {
    return query;
  }

  @Post('')
  bodySearch(@Body() query: AppSearchQuery): AppSearchQuery {
    return query;
  }
}
