import { IsOptional, IsString } from "class-validator";

export class SpecificationDto {
    @IsOptional()
    @IsString()
    processor?: string;
    @IsOptional()
    @IsString()
    ram?: string;
    @IsOptional()
    @IsString()
    storage?: string;
    @IsOptional()
    @IsString()
    display?: string;
    @IsOptional()
    @IsString()
    battery?: string;
    @IsOptional()
    @IsString()
    weight?: string;
    @IsOptional()
    @IsString()
    camera?: string;
    @IsOptional()
    @IsString()
    type?: string;
    @IsOptional()
    @IsString()
    connectivity?: string;
}
