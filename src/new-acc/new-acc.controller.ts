import { Body, Controller, Post } from '@nestjs/common';
import { NewAccService } from './new-acc.service';
import { NewAccDto } from './dto/new-acc.dto';

@Controller('new-acc')
export class NewAccController {
    constructor(private newAcc: NewAccService) { }

    @Post()
    addNewAccessories(@Body() data: NewAccDto): Promise<void> {
        return this.newAcc.addNewAccessories(data)
    }

}
