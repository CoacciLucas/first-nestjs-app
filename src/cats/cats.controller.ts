import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}
    @Post()
    addCat(
        @Body('name') name: string, 
        @Body('color') color: string){
        const catId = this.catsService.insertCat(name, color);
        return {id: catId};
    }
    @Get()
    getAllCats(){
        
    }
}
