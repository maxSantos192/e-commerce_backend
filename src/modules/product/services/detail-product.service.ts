import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DetailProductService {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    return this.prisma.product.findFirst({ where: { id: id } });
  }
}
