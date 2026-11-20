import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-products.dto.js';
import { AuthGuard } from '../common/guard/auth.guard.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
    @Get()
    findAll() {
       return this.productsService.findAll(); 
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    create(@Body() createProductDto: CreateProductDto){
        return this.productsService.create(createProductDto);
    }

}
