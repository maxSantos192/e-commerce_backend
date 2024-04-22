import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DetailProductService } from '../services/detail-product.service';

@Controller('product')
export class DetailProductController {
  constructor(private readonly detailProductService: DetailProductService) {}

  @Get('/:id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.detailProductService.findById(id);
  }
}
