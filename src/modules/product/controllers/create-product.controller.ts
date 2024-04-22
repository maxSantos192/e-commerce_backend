import { Body, Controller, Post } from '@nestjs/common';
import { ProductDTO } from '../dto/product.dto';
import { CreateProductService } from '../services/create-product.service';

@Controller('product')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.createProductService.create(data);
  }
}
