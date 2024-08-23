import { Body, Post, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {

  constructor(private readonly prisma: PrismaService) { }

  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.receipe.create({
      data: createRecipeDto
    });
  }

  findAll() {
    return this.prisma.receipe.findMany();
  }


  findOne(id: number) {
    return this.prisma.receipe.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.receipe.update({
      where: {
        id
      },
      data: updateRecipeDto
    });
  }

  remove(id: number) {
    return this.prisma.receipe.delete({
      where: {
        id
      }
    })
  }
}
