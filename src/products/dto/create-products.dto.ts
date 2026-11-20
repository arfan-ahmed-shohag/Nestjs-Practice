import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Min, ValidateNested } from "class-validator";
import { SpecificationDto } from "./specification.dto.js";
import { Type } from "class-transformer";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @Min(1)
    price: number;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(()=> SpecificationDto)
    specifications?: SpecificationDto;
}