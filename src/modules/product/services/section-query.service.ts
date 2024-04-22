import { Injectable } from '@nestjs/common';
import { ProductDTO } from '../dto/product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class SectionQueryService {
  constructor(private prisma: PrismaService) {}

  async findNewOrDiscounted() {
    return this.prisma.$queryRaw<ProductDTO>`
        SELECT * FROM "product"
        WHERE "is_new" = true OR "discount_price" IS NOT NULL
        ORDER BY random()
        LIMIT 8
      `;
  }
}
