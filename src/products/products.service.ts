import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private readonly products = [
        {
            id: 1,
            name: "Laptop",
            price: 1000,
            description: "A high-performance laptop for work and play.",
            specifications: {
                processor: "Intel Core i7",
                ram: "16GB",
                storage: "512GB SSD",
                display: "15.6-inch Full HD",
                battery: "Up to 10 hours",
                weight: "1.8kg"
            }
        },
        {
            id: 2,
            name: "Smartphone",
            price: 800,
            description: "A sleek smartphone with a stunning display and powerful camera.",
            specifications: {
                processor: "Snapdragon 888",
                ram: "8GB",
                storage: "256GB",
                display: "6.5-inch AMOLED",
                camera: "108MP Triple Camera",
                battery: "Up to 12 hours",
                weight: "180g"
            }
        },
        {
            id: 3,
            name: "Headphones",
            price: 200,
            description: "Wireless headphones with noise cancellation and superior sound quality.",
            specifications: {
                type: "Over-ear",
                connectivity: "Bluetooth 5.0",
                battery: "Up to 20 hours",
                weight: "250g"
            }
        }
    ]

    findAll() {
        return this.products;
    }
    findOne(id: number) {
        const ticket = this.products.find(product => product.id === id);
        
        if(!ticket) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return ticket;
    }

    create(product:any) {
        const newProduct = {
            id: this.products.length +1,
            ...product
        }

        this.products.push(newProduct);

        return newProduct;
    }
}