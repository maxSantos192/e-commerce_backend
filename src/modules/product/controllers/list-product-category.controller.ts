import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { ListProductCategoryService } from '../services/list-product-category.service';

@Controller('product')
export class ListProductCategoryController {
  constructor(
    private readonly listProductCategoryService: ListProductCategoryService
  ) {}

  @Get('/category')
  async getProductsByCategory(
    @Query('categoryId', ParseIntPipe) categoryId: number,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number
  ) {
    return this.listProductCategoryService.findByCategory(categoryId, limit);
  }
}
