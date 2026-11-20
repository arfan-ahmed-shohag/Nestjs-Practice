import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';

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
    create(@Body() payload: any){
        return this.productsService.create(payload);
    }

}
