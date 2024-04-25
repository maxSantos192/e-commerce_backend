import { Injectable } from '@nestjs/common';
import { ProductDTO } from '../dto/product.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CreateProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductDTO) {
    return this.prisma.product.create({ data });
  }

  async createMany(data: ProductDTO) {
    return this.prisma.product.createMany({ data });
  }
}
