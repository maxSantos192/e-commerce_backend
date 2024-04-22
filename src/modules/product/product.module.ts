import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

import { SearchProductController } from './controllers/search-product.controller';
import { SectionQueryController } from './controllers/section-query.controller';
import { CreateProductController } from './controllers/create-product.controller';
import { DetailProductController } from './controllers/detail-product.controller';
import { ListProductCategoryController } from './controllers/list-product-category.controller';
import { ListProductsController } from './controllers/list-products.controller';

import { SearchProductService } from './services/search-product.service';
import { SectionQueryService } from './services/section-query.service';
import { CreateProductService } from './services/create-product.service';
import { DetailProductService } from './services/detail-product.service';
import { ListProductCategoryService } from './services/list-product-category.service';
import { ListProductService } from './services/list-products.service';

@Module({
  controllers: [
    SearchProductController,
    SectionQueryController,
    CreateProductController,
    DetailProductController,
    ListProductCategoryController,
    ListProductsController,
  ],
  providers: [
    SearchProductService,
    SectionQueryService,
    PrismaService,
    CreateProductService,
    DetailProductService,
    ListProductCategoryService,
    ListProductService,
  ],
})
export class ProductModule {}
