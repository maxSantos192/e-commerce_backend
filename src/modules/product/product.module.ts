import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

import { PaginationShopController } from './controllers/pagination-shop.controller';
import { SearchProductController } from './controllers/search-product.controller';
import { SectionQueryController } from './controllers/section-query.controller';
import { CreateProductController } from './controllers/create-product.controller';
import { DetailProductController } from './controllers/detail-product.controller';
import { ListProductCategoryController } from './controllers/list-product-category.controller';
import { ListProductsController } from './controllers/list-products.controller';

import { PaginationShopService } from './services/pagination-shop.service';
import { SearchProductService } from './services/search-product.service';
import { SectionQueryService } from './services/section-query.service';
import { CreateProductService } from './services/create-product.service';
import { DetailProductService } from './services/detail-product.service';
import { ListProductCategoryService } from './services/list-product-category.service';
import { ListProductService } from './services/list-products.service';

@Module({
  controllers: [
    PaginationShopController,
    SearchProductController,
    ListProductCategoryController,
    SectionQueryController,
    CreateProductController,
    DetailProductController,
    ListProductsController,
  ],
  providers: [
    PaginationShopService,
    SearchProductService,
    ListProductCategoryService,
    SectionQueryService,
    PrismaService,
    CreateProductService,
    DetailProductService,
    ListProductService,
  ],
})
export class ProductModule {}
