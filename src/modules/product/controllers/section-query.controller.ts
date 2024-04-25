import { Controller, Get, Query } from '@nestjs/common';
import { SectionQueryService } from '../services/section-query.service';

@Controller('product')
export class SectionQueryController {
  constructor(private readonly sectionQueryService: SectionQueryService) {}

  @Get('/section')
  async getProductSection() {
    return this.sectionQueryService.findNewOrDiscounted();
  }
}
