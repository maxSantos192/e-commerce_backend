/*
  Warnings:

  - Added the required column `total_price` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "total_price" DECIMAL(10,2) NOT NULL;
