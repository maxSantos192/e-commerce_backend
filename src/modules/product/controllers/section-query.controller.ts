import { Controller, Get } from '@nestjs/common';
import { SectionQueryService } from '../services/section-query.service';

@Controller('product')
export class SectionQueryController {
  constructor(private readonly sectionQueryService: SectionQueryService) {}

  @Get('/product-section')
  async getProductSection() {
    return this.sectionQueryService.findNewOrDiscounted();
  }
}
