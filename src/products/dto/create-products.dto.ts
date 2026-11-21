import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Min, ValidateNested } from "class-validator";
import { SpecificationDto } from "./specification.dto.js";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ description: 'Name of the product', example: 'iPhone 13' })
    @IsString()
    @IsNotEmpty()
    name: string;
    @ApiProperty({ description: 'Price of the product', example: 999.99 })
    @IsNumber()
    @Min(1)
    price: number;
    @ApiProperty({ description: 'Description of the product', example: 'A high-end smartphone with advanced features.' })
    @IsString()
    @IsNotEmpty()
    description: string;
    @ApiPropertyOptional({ description: 'Specifications of the product', type: SpecificationDto })
    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(()=> SpecificationDto)
    specifications?: SpecificationDto;
}