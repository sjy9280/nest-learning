import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { ConfigEnum } from 'src/enum/config.enum';

@Controller('user')
export class UserController {
    constructor(private userService: UserService,private configService: ConfigService) {}
   
    @Get()
    getUsers() {
        const db = this.configService.get(ConfigEnum.DB);
        const host = this.configService.get(ConfigEnum.DB_HOST);
        console.log('===========res db,host:',db,host);
        const url = this.configService.get('DB_URL')
        console.log('===========res url:' ,url)
        return this.userService.getUsers();
    }
}
