import { Injectable } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    //create a new category
    async create(data: CategoryDTO) {
        const category = await this.prisma.category.create({
            data
        })
        return category;
    }

    //find all category
    async findAll() {
        return this.prisma.category.findMany()
    }
}
