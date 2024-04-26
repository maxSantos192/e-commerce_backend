import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ListProductCategoryService {
  constructor(private prisma: PrismaService) {}

  async findByCategory(categoryId: number, limit?: number) {
    return this.prisma.product.findMany({
      where: { category_id: categoryId },
      ...(limit && { take: limit }),
      orderBy: {
        created_date: 'desc',
      },
    });
  }
}
