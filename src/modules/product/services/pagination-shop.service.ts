import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class PaginationShopService {
  constructor(private prisma: PrismaService) {}

  async paginationShop(
    page: number,
    limit: number,
    categories?: number[],
    orderBy?: { field: string; order: 'asc' | 'desc' }
  ) {
    const skip = (page - 1) * limit;

    const where: { category_id?: { in: number[] } } = {};
    if (categories !== undefined) {
      where.category_id = { in: categories };
    }

    const order = orderBy ? { [orderBy.field]: orderBy.order } : {};

    const products = await this.prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy: order,
    });

    const count = await this.prisma.product.count({
      where,
    });

    const totalPages = Math.ceil(count / limit);
    const startItem = skip + 1;
    const endItem = skip + products.length;

    return {
      data: products,
      count,
      totalPages,
      pageInfo: `Showing ${startItem}-${endItem} of ${count} results`,
    };
  }
}
