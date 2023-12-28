import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { AccessoriesDto } from './dto/accessories.dto';
import { AccessoriesParamsDto } from './dto/acc-params.dto';
import { Accessories } from './accessories.entity';

@Controller("accessories")
export class AccessoriesController {
    constructor(private accessoriesService: AccessoriesService) { }

    @Post()
    addAccessories(@Body() data: AccessoriesDto): Promise<void> {
        return this.accessoriesService.addAccessories(data)
    }

    @Get("/:id")
    getAccessories(@Param() userId: AccessoriesParamsDto): Promise<Accessories[]> {
        console.log(userId)
        return this.accessoriesService.getAccessories(userId)
    }
}
