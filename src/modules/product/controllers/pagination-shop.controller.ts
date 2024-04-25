import { Get, Controller, ParseIntPipe, Query } from '@nestjs/common';
import { PaginationShopService } from '../services/pagination-shop.service';

@Controller('product')
export class PaginationShopController {
  constructor(private readonly paginationShopService: PaginationShopService) {}

  @Get('/pagination')
  getPaginationShop(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('category') categoryQuery?: string, // Alterado para receber uma string
    @Query('orderBy') orderByQuery?: string
  ) {
    const categories = categoryQuery
      ? categoryQuery.split(',').map(Number)
      : undefined; // Converte a string em um array de números
    const orderBy = this.parseOrderBy(orderByQuery);
    return this.paginationShopService.paginationShop(
      page,
      limit,
      categories, // Passa um array de categorias
      orderBy
    );
  }

  private parseOrderBy(
    orderByQuery?: string
  ): { field: string; order: 'asc' | 'desc' } | undefined {
    if (!orderByQuery) {
      return undefined;
    }

    const [field, order] = orderByQuery.split(':');
    if (
      (field === 'name' || field === 'price') &&
      (order === 'asc' || order === 'desc')
    ) {
      return { field, order };
    } else {
      console.warn('Invalid orderBy parameter');
      return undefined;
    }
  }
}
