import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ListProductCategoryService } from '../services/list-product-category.service';

@Controller('product')
export class ListProductCategoryController {
  constructor(
    private readonly listProductCategoryService: ListProductCategoryService
  ) {}

  @Get('/category/:categoryId')
  async getProductsByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number
  ) {
    return this.listProductCategoryService.findByCategory(categoryId);
  }
}
