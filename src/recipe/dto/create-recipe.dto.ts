import { IsString, IsOptional } from "class-validator";

export class CreateRecipeDto {
    @IsString()
    title: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    ingredients: string

    @IsString()
    instructions: string



}
