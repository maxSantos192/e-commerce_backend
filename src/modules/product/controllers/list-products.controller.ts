import { Controller, Get } from '@nestjs/common';
import { ListProductService } from '../services/list-products.service';

@Controller('product')
export class ListProductsController {
  constructor(private readonly listProductService: ListProductService) {}

  @Get()
  async findAll() {
    return this.listProductService.findAll();
  }
}
