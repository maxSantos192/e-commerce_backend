import { Controller, Get, Query } from '@nestjs/common';
import { SearchProductService } from '../services/search-product.service';

@Controller('product')
export class SearchProductController {
  constructor(private readonly searchProductService: SearchProductService) {}

  @Get('/search')
  async getProductsByName(@Query('name') name: string) {
    return this.searchProductService.findByName(name);
  }
}
