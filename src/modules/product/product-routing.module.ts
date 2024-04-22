import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { SectionQueryController } from './controllers/section-query.controller';

const routes: Routes = [
  {
    path: 'product',
    children: [
      {
        path: '/product-section',
        module: SectionQueryController,
      },
    ],
  },
];
