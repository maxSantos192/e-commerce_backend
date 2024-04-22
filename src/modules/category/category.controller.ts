import { Body, Controller, Post, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() data: CategoryDTO) {
    return this.categoryService.create(data)
  }

  @Get()
  async findAll() {
    return this.categoryService.findAll()
  }
}
